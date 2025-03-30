#!/bin/bash

set -euxo pipefail

if [[ "$(uname -s)" == *"_NT-"* ]]; then
    echo "Running on Windows"
    if [ -d "dist" ]; then
        rmdir /s /q dist || true
    fi
else
    echo "Running on Unix/Linux"
    if ! command -v rimraf &> /dev/null; then
        echo "rimraf could not be found, installing it locally..."
        yarn add rimraf
    fi
    yarn run rimraf dist || true
fi

yarn run swc src -d dist -D --strip-leading-paths --copy-files
