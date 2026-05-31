const fs = require('fs');
const path = require('path');

const directory = '/Users/madhanraghuram/Desktop/VK/src';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Global theme class replacements
  content = content.replace(/text-accent/g, 'text-white');
  content = content.replace(/bg-accent\/10/g, 'bg-white/10');
  content = content.replace(/bg-accent\/30/g, 'bg-white/30');
  content = content.replace(/bg-accent/g, 'bg-white');
  content = content.replace(/border-accent\/10/g, 'border-white/10');
  content = content.replace(/border-accent\/30/g, 'border-white/30');
  content = content.replace(/border-accent/g, 'border-white');
  content = content.replace(/text-gradient-gold/g, 'text-white');
  
  // Specific logical replacements where text needs to invert on hover
  content = content.replace(/hover:bg-white hover:text-white/g, 'hover:bg-white hover:text-black');
  content = content.replace(/group-hover:bg-white group-hover:border-white group-hover:text-black/g, 'group-hover:bg-white group-hover:text-black');
  
  // Fix cases where we replaced bg-accent text-white to bg-white text-white
  content = content.replace(/bg-white text-white/g, 'bg-white text-black');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(directory);

// Also update tailwind.config.js
const tailwindPath = '/Users/madhanraghuram/Desktop/VK/tailwind.config.js';
let tailwindContent = fs.readFileSync(tailwindPath, 'utf8');
tailwindContent = tailwindContent.replace(/accent: "#d4af37", \/\/ Metallic gold accent/g, 'accent: "#ffffff",');
fs.writeFileSync(tailwindPath, tailwindContent, 'utf8');
console.log('Updated tailwind.config.js');
