import sys

with open(r'C:\Users\jeet9\.gemini\antigravity\brain\fb2cc3cd-2659-451d-a776-ffbcbbd697b6\.system_generated\steps\127\content.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    
# Find the line that starts with :root
css_line = next(line for line in lines if line.startswith(':root'))

css = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap");\n' + css_line

with open(r'C:\Users\jeet9\.gemini\antigravity\scratch\portfolio-app\src\index.css', 'w', encoding='utf8') as f:
    f.write(css)
    
print("CSS Copied successfully")
