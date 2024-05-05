const fs = require('fs');

function reverseFile(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const reversedContent = content.split('').reverse().join('');
  fs.writeFileSync(filename, reversedContent);
}

reverseFile('text.txt');