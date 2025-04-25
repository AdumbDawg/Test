const fs = require('fs');

// Read the template file
const template = fs.readFileSync('index.template.html', 'utf8');

// Replace the placeholder with the actual API key from environment variable
const html = template
  .replace('MAPS_API_KEY_PLACEHOLDER', process.env.MAPS_API_KEY)
  .replace('YOUR_STORAGE_ACCOUNT', process.env.STORAGE_ACCOUNT_NAME);

// Write the result to index.html
fs.writeFileSync('index.html', html);

console.log('Build completed successfully!');