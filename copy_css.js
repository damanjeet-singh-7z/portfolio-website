const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\jeet9\\.gemini\\antigravity\\brain\\fb2cc3cd-2659-451d-a776-ffbcbbd697b6\\.system_generated\\steps\\127\\content.md', 'utf8');
const lines = content.split('\n');
const css = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap");\n' + lines[4];
fs.writeFileSync('C:\\Users\\jeet9\\.gemini\\antigravity\\scratch\\portfolio-app\\src\\index.css', css);
console.log('CSS Replaced successfully');
