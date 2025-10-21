#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Building both main app and Storybook...\n');

// Build main app
console.log('📦 Building main React app...');
execSync('npx vite build --mode production', { stdio: 'inherit' });

// Build Storybook
console.log('\n📚 Building Storybook...');
execSync('npm run build-storybook', { stdio: 'inherit' });

// Create combined dist structure
console.log('\n🔧 Setting up combined deployment...');

const distPath = path.join(__dirname, '..', 'dist');
const storybookPath = path.join(__dirname, '..', 'storybook-static');

// Create storybook directory in dist
const storybookDistPath = path.join(distPath, 'storybook');
if (!fs.existsSync(storybookDistPath)) {
  fs.mkdirSync(storybookDistPath, { recursive: true });
}

// Copy Storybook files to dist/storybook
execSync(`cp -r ${storybookPath}/* ${storybookDistPath}/`, { stdio: 'inherit' });

// Create a redirect file for storybook
const redirectContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Storybook</title>
  <meta http-equiv="refresh" content="0; url=/storybook/">
</head>
<body>
  <p>Redirecting to Storybook...</p>
  <script>window.location.href = '/storybook/';</script>
</body>
</html>`;

fs.writeFileSync(path.join(distPath, 'storybook.html'), redirectContent);

console.log('\n✅ Build complete!');
console.log('📁 Main app: /');
console.log('📚 Storybook: /storybook/');
