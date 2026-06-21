import os
import re

def convert_html_to_jsx(html):
    # Extract everything between <nav class="nav">...</nav> and <footer class="site-footer">...</footer>
    body_match = re.search(r'</nav>(.*?)<footer class="site-footer">', html, re.DOTALL)
    if not body_match:
        # Fallback
        body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
        content = body_match.group(1)
    else:
        content = body_match.group(1)

    # replace class with className
    content = content.replace('class="', 'className="')
    
    # fix self closing tags
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<br>', r'<br/>', content)
    content = re.sub(r'<hr([^>]*?)>', r'<hr\1 />', content)
    content = re.sub(r'<source([^>]*?)(?<!/)>', r'<source\1 />', content)
    
    # replace unescaped entities that React hates
    # e.g., ' -> &apos; inside text nodes, but that's hard with regex. We'll leave it unless it errors.
    
    # fix style attributes
    def style_replacer(match):
        style_str = match.group(1)
        styles = {}
        for rule in style_str.split(';'):
            rule = rule.strip()
            if not rule:
                continue
            parts = rule.split(':', 1)
            if len(parts) == 2:
                key = parts[0].strip()
                val = parts[1].strip()
                # convert key to camelCase
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                styles[key] = val
        
        # build js object string
        style_obj_str = ", ".join(f"'{k}': '{v}'" for k, v in styles.items())
        return f"style={{{{ {style_obj_str} }}}}"
    
    content = re.sub(r'style="([^"]+)"', style_replacer, content)

    # replace <!-- ... --> with {/* ... */}
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    # fix links
    content = content.replace('href="index.html', 'href="/')
    content = content.replace('href="about.html', 'href="/about')
    content = content.replace('href="Genie_Case_Study.html', 'href="/Genie_Case_Study')
    content = content.replace('href="Phoenix_Case_Study.html', 'href="/Phoenix_Case_Study')
    content = content.replace('href="SONA_Case_Study.html', 'href="/SONA_Case_Study')
    # add absolute path for images so they work in subpages
    content = content.replace('src="images/', 'src="/images/')
    content = content.replace('srcset="images/', 'srcSet="/images/')
    
    jsx = f"""import Link from 'next/link';

export default function CaseStudy() {{
  return (
    <main>
      {content.strip()}
    </main>
  );
}}
"""
    return jsx

files = ["Genie_Case_Study", "Phoenix_Case_Study", "SONA_Case_Study"]
for name in files:
    with open(f"public/{name}.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    jsx = convert_html_to_jsx(html)
    
    out_dir = f"src/app/{name}"
    os.makedirs(out_dir, exist_ok=True)
    with open(f"{out_dir}/page.js", "w", encoding="utf-8") as f:
        f.write(jsx)
        
    print(f"Generated {out_dir}/page.js")
