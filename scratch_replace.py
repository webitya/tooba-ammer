import re

filepath = r"d:\tooba-ameer\src\app\Genie_Case_Study\page.js"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's search for patterns like:
#           <div className="section-head">
#             <div className="sec-marker">
#               <span className="sec-num">01.</span>
#               <span className="label">The challenge</span>
#             </div>
#             <span className="rule"></span>
#             <h2 className="H2">A brand that kept losing the girl it won.</h2>
#           </div>

pattern = re.compile(
    r'(\s+)<div className="section-head">\s+<div className="sec-marker">\s+<span className="sec-num">(\d+\.?)</span>\s+<span className="label">([^<]+)</span>\s+</div>\s+<span className="rule"></span>\s+<h2 className="H2">([^<]+)</h2>\s+</div>',
    re.MULTILINE
)

matches = list(pattern.finditer(content))
print(f"Found {len(matches)} matches:")
for idx, match in enumerate(matches):
    indent = match.group(1)
    num = match.group(2)
    label = match.group(3)
    title = match.group(4)
    print(f"Match {idx+1}: {num} - {label} - {title}")
