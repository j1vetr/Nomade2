# Production Deployment Rehberi - Maison Nomade Tourism

Bu belge, Maison Nomade Tourism iletişim sayfasının kendi sunucunuzda PM2 ile nasıl çalıştırılacağını açıklar.

## 📋 Gereksinimler

- Node.js (v18 veya üzeri)
- npm
- PM2 (process manager)
- Git (opsiyonel, kod güncellemeleri için)

## 🚀 İlk Kurulum

### 1. PM2 Kurulumu (Eğer yoksa)

```bash
npm install -g pm2
```

### 2. Proje Dosyalarını Sunucuya Yükleme

Projeyi sunucunuza kopyalayın veya git clone yapın:

```bash
git clone [repo-url] maison-nomade
cd maison-nomade
```

### 3. Deployment Script'i Çalıştırılabilir Yapma

```bash
chmod +x deploy.sh
```

### 4. İlk Deployment

```bash
./deploy.sh
```

Bu script otomatik olarak:
- ✅ Bağımlılıkları yükler
- ✅ React frontend'i build eder
- ✅ PM2 ile uygulamayı başlatır
- ✅ Process'i kaydeder

## 🔧 Manuel Kurulum (İsterseniz)

Eğer deploy.sh kullanmak istemezseniz:

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Frontend build
npm run build

# 3. PM2 ile başlat
pm2 start ecosystem.config.cjs

# 4. PM2 kaydet
pm2 save

# 5. Sistem başlangıcında otomatik başlat
pm2 startup
# Çıkan komutu çalıştırın
```

## 📊 PM2 Komutları

### Durumu Kontrol Etme
```bash
pm2 list                          # Tüm process'leri listele
pm2 show maison-nomade-contact    # Detaylı bilgi
pm2 monit                         # Real-time monitoring
```

### Logları Görüntüleme
```bash
pm2 logs maison-nomade-contact    # Tüm loglar
pm2 logs --lines 100              # Son 100 satır
pm2 flush                         # Logları temizle
```

### Process Yönetimi
```bash
pm2 restart maison-nomade-contact  # Yeniden başlat
pm2 reload maison-nomade-contact   # Zero-downtime restart
pm2 stop maison-nomade-contact     # Durdur
pm2 delete maison-nomade-contact   # Sil
```

### Güncelleme ve Yeniden Başlatma
```bash
# Kodu güncelle (git kullanıyorsanız)
git pull origin main

# Yeniden deploy
./deploy.sh

# Veya manuel restart
pm2 restart ecosystem.config.cjs --update-env
```

## 🌐 Nginx ile Kullanım (Önerilen)

Port 5000'i dışarıya açmak yerine Nginx reverse proxy kullanmanız önerilir.

### Nginx Config Örneği

`/etc/nginx/sites-available/maison-nomade`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:6644;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Nginx'i Aktifleştirme

```bash
sudo ln -s /etc/nginx/sites-available/maison-nomade /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🔒 SSL Sertifikası (HTTPS)

Let's Encrypt ile ücretsiz SSL:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## 🎯 Port Değiştirme

Farklı bir port kullanmak isterseniz:

1. `ecosystem.config.cjs` dosyasını düzenleyin:
```javascript
env: {
    NODE_ENV: 'production',
    PORT: 8080  // İstediğiniz port
}
```

2. PM2'yi yeniden başlatın:
```bash
pm2 restart ecosystem.config.cjs --update-env
```

## 📁 Proje Yapısı

```
maison-nomade/
├── client/              # React frontend (kaynak kod)
├── server/              # Express backend
├── dist/                # Build edilen dosyalar
│   └── public/         # Frontend build çıktısı
├── logs/                # PM2 logları
├── ecosystem.config.cjs # PM2 konfigürasyonu (.cjs = CommonJS)
├── deploy.sh            # Deployment scripti
└── package.json         # Ana paket dosyası
```

## ⚡ Önemli Notlar

1. **Production Build**: Uygulama her zaman build edilmiş versiyonla çalışır (`npm run build`)
2. **Port**: Uygulama **6644** portunda çalışır
3. **Otomatik Başlatma**: `pm2 startup` ile sistem başlangıcında otomatik başlar
4. **Memory Limit**: 500MB'ı geçerse otomatik restart
5. **Loglar**: `logs/` klasöründe saklanır

## 🆘 Sorun Giderme

### Uygulama başlamıyor
```bash
pm2 logs maison-nomade-contact --lines 50
```

### Port zaten kullanımda
```bash
# Port 5000'i kullanan process'i bul
sudo lsof -i :5000
# İsteğe bağlı: kill et
sudo kill -9 [PID]
```

### Build hatası
```bash
# Node modules'ı temizle ve tekrar yükle
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 İletişim

Sorun yaşarsanız logları kontrol edin:
```bash
pm2 logs maison-nomade-contact
```

---

**Not**: Bu uygulama statik bir iletişim sayfasıdır, veritabanı gerektirmez. Sadece Express sunucusu build edilmiş React uygulamasını serve eder.
