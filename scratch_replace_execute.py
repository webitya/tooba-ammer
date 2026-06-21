import re

filepath = r"d:\tooba-ameer\src\app\Genie_Case_Study\page.js"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for the 10 regular sections
regular_pattern = re.compile(
    r'<div className="section-head">\s+<div className="sec-marker">\s+<span className="sec-num">(\d+\.?)</span>\s+<span className="label">([^<]+)</span>\s+</div>\s+<span className="rule"></span>\s+<h2 className="H2">([^<]+)</h2>\s+</div>',
    re.MULTILINE
)

# Pattern for the 2 featured sections
featured_pattern = re.compile(
    r'<div className="featured-head">\s+<div className="sec-marker">\s+<span className="sec-num">(\d+\.?)</span>\s+<span className="label">([^<]+)</span>\s+</div>\s+<span className="rule"></span>\s+<span className="label">([^<]+)</span>\s+</div>',
    re.MULTILINE
)

# Replacements
new_content, count1 = regular_pattern.subn(
    r'<div className="section-marker">\n            <span className="num">\1</span>\n            <span className="label">\2</span>\n          </div>\n          <h2 className="section-title">\3</h2>',
    content
)

new_content, count2 = featured_pattern.subn(
    r'<div className="featured-head">\n            <div className="section-marker">\n              <span className="num">\1</span>\n              <span className="label">\2</span>\n            </div>\n            <span className="label">\3</span>\n          </div>',
    new_content
)

print(f"Replaced {count1} regular sections and {count2} featured sections.")

if count1 == 10 and count2 == 2:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Write back successful!")
else:
    print("Warning: Count did not match expected (10 regular, 2 featured). Write back aborted.")
