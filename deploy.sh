#!/bin/bash

echo "🚀 Maison Nomade Tourism - Production Deployment"
echo "================================================"

# Renklendirme
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. Bağımlılıkları yükle
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo "❌ Dependency installation failed!"
    exit 1
fi

# 2. Frontend build
echo -e "${BLUE}🏗️  Building React frontend...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# 3. Logs dizini oluştur
mkdir -p logs

# 4. PM2 ile başlat/yeniden başlat
echo -e "${BLUE}🔄 Starting/Restarting PM2 process...${NC}"
if pm2 describe maison-nomade-contact > /dev/null 2>&1; then
    echo "Restarting existing process..."
    pm2 restart ecosystem.config.cjs --update-env
else
    echo "Starting new process..."
    pm2 start ecosystem.config.cjs
fi

# 5. PM2 kaydet
pm2 save

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo "📊 Process status:"
pm2 list
echo ""
echo "📝 View logs with: pm2 logs maison-nomade-contact"
echo "📊 Monitor with: pm2 monit"
