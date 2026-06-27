import re

file_path = 'src/app/Color_Quest_Case_Study/page.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the connect-band section
idx = content.find('<section className="connect-band">')
if idx != -1:
    # We want to remove everything from `<section className="connect-band">` 
    # up to the end, but we must keep `</main>\n  );\n}`
    new_content = content[:idx] + '    </main>\n  );\n}\n'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully removed connect-band section")
else:
    print("Could not find connect-band section")
