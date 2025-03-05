#!/bin/bash

set -e

if [ -z "$LIVEAPP_DIR" ]; then
  echo -e "\033[1;31mError: LIVEAPP_DIR variable not set!\033[0m"
  echo "Add the following line to your shell config file (~/.zshrc or equivalent):"
  echo -e "\033[33mexport LIVEAPP_DIR=/path/to/your/liveapp\033[0m"
  echo "And load the change with:"
  echo -e "\033[33msource ~/.zshrc\033[0m"
  exit 1
fi

if [ ! -d "$LIVEAPP_DIR" ]; then
  echo -e "\033[1;31mError: $LIVEAPP_DIR directory does not exist\033[0m"
  exit 1
fi

echo "Building and packing.."
pnpm build
LIB_TAR=$(pnpm pack | tail -n 1)

PKG_PATH=$(pwd)/$LIB_TAR
PKG_NAME=$(jq -r .name package.json)

echo "Switching to live app directory.."
cd "$LIVEAPP_DIR"

echo "Re-installing $PKG_NAME"
pnpm remove $PKG_NAME || true
pnpm install "$PKG_PATH"

echo -e "\033[32mPackage linked to $LIVEAPP_DIR!\033[0m"

