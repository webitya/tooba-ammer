import re

filepath = r"d:\tooba-ameer\src\app\Genie_Case_Study\page.js"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace subsec wrapper + subsec-head with subsection + subsection-num + subsection-title
# Pattern:
#           <div className="subsec">
#             <div className="subsec-head">
#               <span className="n">05a</span>
#               <span className="ttl">What designs needed to exist.</span>
#             </div>
#             ... (prose etc)
#           </div>
# ->
#           <div className="subsection">
#             <span className="subsection-num">05a</span>
#             <h3 className="subsection-title">What designs needed to exist.</h3>
#             ... (prose etc)
#           </div>

# First let's fix the subsec-head -> subsection-num/title pattern
# This replaces just the opening div + inner spans
head_pattern = re.compile(
    r'(<div className="subsec">)\s+<div className="subsec-head">\s+<span className="n">([^<]+)</span>\s+<span className="ttl">([^<]+)</span>\s+</div>',
    re.MULTILINE
)

def head_replacer(m):
    return f'<div className="subsection">\n            <span className="subsection-num">{m.group(2)}</span>\n            <h3 className="subsection-title">{m.group(3)}</h3>'

new_content, count = head_pattern.subn(head_replacer, content)
print(f"Replaced {count} subsec-head blocks.")

# Now also check for standalone subsec-head without wrapping subsec div
# (some may have different nesting)
head_only_pattern = re.compile(
    r'<div className="subsec-head">\s+<span className="n">([^<]+)</span>\s+<span className="ttl">([^<]+)</span>\s+</div>',
    re.MULTILINE
)
remaining = list(head_only_pattern.finditer(new_content))
print(f"Remaining standalone subsec-head blocks: {len(remaining)}")
for m in remaining:
    print(f"  - {m.group(1)} - {m.group(2)}")

if count > 0:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Write back successful!")
