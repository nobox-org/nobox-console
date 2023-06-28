#!/bin/bash

echo "⚡ Deploying to production..."

echo "Clearing All Uncommitted files, e.g package-lock"
git reset --hard HEAD

echo ">> Pulling from Git"
git pull

echo ">> Installing dependencies"
npm install

echo ">> Building"
npm run build

echo ">> Running Build Files Via Port"
npm run start -- --port 3300