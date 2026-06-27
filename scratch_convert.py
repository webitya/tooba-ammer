import re

def style_to_jsx(style_str):
    if not style_str.strip(): return "{}"
    parts = style_str.split(';')
    jsx_styles = []
    for p in parts:
        if ':' not in p: continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip()
        # to camelCase
        k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        # remove px for 0
        if v == '0' or v == '0px':
            v_val = '0'
        else:
            v_val = f"'{v}'"
        jsx_styles.append(f"{k_camel}: {v_val}")
    return "{{ " + ", ".join(jsx_styles) + " }}"

html = open('public/Color_Quest_Case_Study.html', encoding='utf-8').read()

# Extract from <section class="hero"> to the end before <footer>
match = re.search(r'(<section class="hero">.*?)<footer', html, re.DOTALL)
if not match:
    print("Could not find content")
    exit(1)

content = match.group(1)

# We want to remove the <section class="connect-band"> ... </section> if it exists, or just keep it?
# Let's keep it, but wait, the existing Phoenix page doesn't have connect-band in it, it might be in layout or it's standalone.
# Actually, the user wants the case study. I'll include everything before <footer

# 1. Replace class= with className=
content = content.replace('class=', 'className=')

# 2. Self close tags
content = re.sub(r'<img([^>]*[^/])>', r'<img\1 />', content)
content = re.sub(r'<br>', r'<br />', content)
content = re.sub(r'<hr>', r'<hr />', content)

# 3. Convert style="..."
def style_replacer(m):
    return "style=" + style_to_jsx(m.group(1))

content = re.sub(r'style="([^"]*)"', style_replacer, content)

# 4. Handle any raw &mdash; etc (React handles them fine in text, but wait, it's safer to leave them or use unicode?) React allows &mdash;
# 5. Fix any other unclosed tags? In HTML5 sometimes <source> or <input> are unclosed. Here it's mostly text.

jsx = f"""import Link from 'next/link';

export const metadata = {{
  title: 'Color Quest — Tooba Ameer',
  description: 'Color Quest — a colour direction system for a luggage portfolio. Safari Industries, 2024–2026.'
}};

export default function ColorQuestCaseStudy() {{
  return (
    <main>
      {{/*  CONTENT EXTRACTED FROM HTML  */}}
      {content}
    </main>
  );
}}
"""

open('src/app/Color_Quest_Case_Study/page.js', 'w', encoding='utf-8').write(jsx)
print("Successfully generated src/app/Color_Quest_Case_Study/page.js")
