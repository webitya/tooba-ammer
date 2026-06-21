import re

filepath = r"d:\tooba-ameer\src\app\Genie_Case_Study\page.js"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(
    r'<div className="subsec">\s+<div className="subsec-head">\s+<span className="n">([^<]+)</span>\s+<span className="ttl">([^<]+)</span>\s+</div>',
    re.MULTILINE
)

matches = list(pattern.finditer(content))
print(f"Found {len(matches)} matches:")
for idx, match in enumerate(matches):
    num = match.group(1)
    ttl = match.group(2)
    print(f"Match {idx+1}: {num} - {ttl}")
