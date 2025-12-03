#!/bin/bash

echo "=== Bruncho UK Deployment Script ==="

cd /var/www/bruncho-uk

echo "1. Pulling latest changes..."
git pull origin main

echo "2. Installing dependencies..."
npm install

echo "3. Building project..."
npm run build

echo "4. Reloading Nginx..."
sudo systemctl reload nginx

echo "=== Deployment Complete ==="
