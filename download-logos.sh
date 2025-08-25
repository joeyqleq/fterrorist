#!/bin/bash

echo "🚀 Starting logo download process..."
echo "This will download all company logos and save them locally."
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npx is available
if ! command -v npx &> /dev/null; then
    echo "❌ npx is not available. Please install a newer version of Node.js."
    exit 1
fi

# Install ts-node if not available
if ! npx ts-node --version &> /dev/null; then
    echo "📦 Installing ts-node..."
    npm install -g ts-node
fi

# Run the logo download script
echo "📥 Downloading logos..."
npx ts-node scripts/download-logos.ts

echo ""
echo "✅ Logo download complete!"
echo "🔄 You can now refresh your page to see the logos load instantly."
echo ""
echo "💡 The logos are now cached locally and won't need to be downloaded again unless the cache expires."
