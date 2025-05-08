#!/bin/bash

set -euxo pipefail

echo "======================"
echo "🌍 OS Detected: $(uname -s)"
echo "======================"

if [[ "$(uname -s)" == *"_NT-"* ]]; then
    echo "Running on Windows"
    if [ -d "dist" ]; then
        echo "Removing dist folder..."
        rmdir /s /q dist || true
    fi
else
    echo "Running on Unix/Linux"
    echo "Checking for rimraf..."
    if ! command -v rimraf &> /dev/null; then
        echo "❌ rimraf could not be found, installing locally..."
        yarn add rimraf
    else
        echo "✅ rimraf found: $(command -v rimraf)"
    fi
    echo "Removing dist folder with rimraf..."
    yarn run rimraf dist || true
fi

echo "======================"
echo "📦 Running yarn install to confirm dependencies..."
yarn install --frozen-lockfile || { echo '❌ yarn install failed'; exit 1; }
echo "✅ Dependencies installed"
echo "======================"

echo "🏗️  Starting build process with swc..."
echo "👉 Command: yarn run swc src -d dist -D --strip-leading-paths --copy-files"

if yarn run swc src -d dist -D --strip-leading-paths --copy-files; then
    echo "✅ Build succeeded!"
else
    echo "❌ Build failed!"
    echo "❌ Checking if swc exists..."
    yarn list --pattern @swc/cli || echo "❌ swc CLI not found"
    yarn list --pattern @swc/core || echo "❌ swc Core not found"
    echo "Aborting."
    exit 1
fi

echo "======================"
echo "📂 Build output directory contents:"
ls -al dist || echo "⚠️ dist folder does not exist!"
echo "======================"