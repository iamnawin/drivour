#!/bin/bash

# Drivour - Push to GitHub Script
# Repository: https://github.com/iamnawin/drivour

echo "🚀 Pushing Drivour to GitHub..."
echo ""

# Add remote (if not already added)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/iamnawin/drivour.git

echo "✅ Remote added: https://github.com/iamnawin/drivour"
echo ""

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now live at:"
echo "   https://github.com/iamnawin/drivour"
echo ""
echo "🎯 Next steps:"
echo "   1. Visit your repo and star it ⭐"
echo "   2. Add topics: react-native, expo, open-source, maps"
echo "   3. Enable Issues and Discussions in Settings"
echo "   4. Share on social media! 🐦"
