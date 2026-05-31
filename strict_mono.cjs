const fs = require('fs');
const path = require('path');

const directory = '/Users/madhanraghuram/Desktop/VK/src/components';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace background grays with white
  content = content.replace(/bg-gray-\d+/g, 'bg-white');

  // Replace text grays with black
  content = content.replace(/text-gray-\d+/g, 'text-black');

  // Replace border grays with black
  content = content.replace(/border-gray-\d+/g, 'border-black');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory(directory);

// Also do App.jsx
replaceInFile('/Users/madhanraghuram/Desktop/VK/src/App.jsx');
