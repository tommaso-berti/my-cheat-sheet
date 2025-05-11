#!/bin/bash

echo "🔁 Pulling latest changes..."
git pull origin main || exit 1

echo "🔐 Fixing permissions..."
chown -R www-data:www-data .

echo "🔄 Reloading nginx..."
systemctl reload nginx

echo "✅ Update complete!"