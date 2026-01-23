#!/bin/bash
set -e

bun install
bun run validate

rm -rf ~/.vscode/extensions/quinix-vscode
mkdir -p ~/.vscode/extensions/quinix-vscode
git archive HEAD | tar -x -C ~/.vscode/extensions/quinix-vscode

echo "Installed to ~/.vscode/extensions/quinix-vscode"
