# Nginx Kurulum Rehberi - qr.maison-nomade-tourism.com

Bu rehber, Maison Nomade Tourism QR iletişim sayfasını **qr.maison-nomade-tourism.com** alan adında yayınlamak için Nginx kurulumunu açıklar.

## 📋 Önkoşullar

- ✅ PM2 ile uygulama çalışıyor (port 6644)
- ✅ Alan adı DNS ayarları yapılmış (A record: qr.maison-nomade-tourism.com → Sunucu IP)

## 🚀 Adım Adım Kurulum

### 1️⃣ Nginx Kurulumu

```bash
# Nginx'i yükle (eğer yoksa)
sudo apt update
sudo apt install nginx -y

# Nginx'in çalıştığını kontrol et
sudo systemctl status nginx
sudo systemctl enable nginx
```

### 2️⃣ Nginx Config Dosyasını Kopyala

```bash
# Config dosyasını Nginx dizinine kopyala
sudo cp nginx-qr-maison-nomade.conf /etc/nginx/sites-available/qr-maison-nomade.conf

# Symlink oluştur (siteyi aktifleştir)
sudo ln -s /etc/nginx/sites-available/qr-maison-nomade.conf /etc/nginx/sites-enabled/

# Nginx config'i test et
sudo nginx -t
```

### 3️⃣ Geçici HTTP Konfigürasyonu (SSL için)

SSL sertifikası almadan önce, HTTP ile çalışacak şekilde geçici düzenleme yapın:

```bash
# Config dosyasını düzenle
sudo nano /etc/nginx/sites-available/qr-maison-nomade.conf
```

Geçici olarak sadece bu kısmı aktif bırakın (HTTPS kısmını yorum satırına alın):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name qr.maison-nomade-tourism.com;

    location / {
        proxy_pass http://localhost:6644;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Nginx'i yeniden başlat
sudo systemctl restart nginx
```

**Test edin:** http://qr.maison-nomade-tourism.com adresine gidin, uygulama çalışmalı.

### 4️⃣ SSL Sertifikası (Let's Encrypt)

```bash
# Certbot'u yükle
sudo apt install certbot python3-certbot-nginx -y

# SSL sertifikası al
sudo certbot --nginx -d qr.maison-nomade-tourism.com

# Otomatik yenileme için timer'ı kontrol et
sudo systemctl status certbot.timer
```

Certbot otomatik olarak Nginx config'inizi güncelleyecek ve HTTPS'i aktifleştirecek.

### 5️⃣ Tam Config'i Yükle

Certbot işleminden sonra, tam config dosyasını tekrar yükleyin:

```bash
# Orijinal config'i geri kopyala
sudo cp nginx-qr-maison-nomade.conf /etc/nginx/sites-available/qr-maison-nomade.conf

# Test et
sudo nginx -t

# Nginx'i reload et
sudo systemctl reload nginx
```

## ✅ Kontrol Listesi

Test edin:

- ✅ http://qr.maison-nomade-tourism.com → https'e redirect ediyor mu?
- ✅ https://qr.maison-nomade-tourism.com → Uygulama çalışıyor mu?
- ✅ Logo ve ikonlar görünüyor mu?
- ✅ Dil değiştirme (RU/EN) çalışıyor mu?
- ✅ Tüm butonlar doğru linklere gidiyor mu?

## 🔍 Test Komutları

```bash
# PM2 durumu
pm2 list

# Nginx durumu
sudo systemctl status nginx

# Nginx logları
sudo tail -f /var/log/nginx/qr-maison-nomade-access.log
sudo tail -f /var/log/nginx/qr-maison-nomade-error.log

# SSL sertifikası kontrol
sudo certbot certificates

# Port dinleme kontrolü
sudo netstat -tlnp | grep :6644
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

## 🔧 Güvenlik Duvarı (Firewall)

Eğer UFW kullanıyorsanız:

```bash
# HTTP ve HTTPS portlarını aç
sudo ufw allow 'Nginx Full'

# Veya manuel
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Durumu kontrol et
sudo ufw status
```

## 🔄 Nginx Komutları

```bash
# Config test
sudo nginx -t

# Restart (kesinti olur)
sudo systemctl restart nginx

# Reload (kesinti olmaz - önerilen)
sudo systemctl reload nginx

# Stop
sudo systemctl stop nginx

# Start
sudo systemctl start nginx

# Durumu görüntüle
sudo systemctl status nginx
```

## 📝 Config Dosyası Düzenleme

```bash
# Config'i düzenle
sudo nano /etc/nginx/sites-available/qr-maison-nomade.conf

# Test et
sudo nginx -t

# Reload et
sudo systemctl reload nginx
```

## 🆘 Sorun Giderme

### 502 Bad Gateway Hatası

```bash
# PM2 çalışıyor mu?
pm2 list

# Port 6644 dinleniyor mu?
sudo netstat -tlnp | grep :6644

# PM2 logları
pm2 logs maison-nomade-contact
```

### SSL Sertifikası Yenilenmiyor

```bash
# Manuel yenileme
sudo certbot renew

# Otomatik yenileme timer
sudo systemctl status certbot.timer
```

### Nginx Başlamıyor

```bash
# Hata loglarını kontrol et
sudo tail -50 /var/log/nginx/error.log

# Config syntax kontrolü
sudo nginx -t

# Port çakışması var mı?
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

## 📊 Performans Optimizasyonu

Config dosyasında zaten şunlar aktif:

✅ **Gzip compression** - Dosya boyutlarını küçültür  
✅ **Static asset caching** - Resim, CSS, JS cache'lenir  
✅ **HTTP/2** - Daha hızlı yükleme  
✅ **Security headers** - Güvenlik başlıkları  
✅ **SSL optimizasyonu** - Hızlı SSL handshake

## 🔐 Güvenlik Özellikleri

Config'de aktif güvenlik özellikleri:

- ✅ HTTPS zorunlu (HTTP → HTTPS redirect)
- ✅ Modern TLS (TLSv1.2, TLSv1.3)
- ✅ HSTS (Strict-Transport-Security)
- ✅ XSS Protection
- ✅ Clickjacking koruması (X-Frame-Options)
- ✅ MIME-type sniffing koruması
- ✅ Hidden file erişimi engellendi

## 📱 Mobil Test

```bash
# QR kod oluştur (opsiyonel)
sudo apt install qrencode
qrencode -t ANSI "https://qr.maison-nomade-tourism.com"
```

## 🎯 Son Kontrol

```bash
# Her şey çalışıyor mu?
curl -I https://qr.maison-nomade-tourism.com

# SSL A+ rating için test
# https://www.ssllabs.com/ssltest/analyze.html?d=qr.maison-nomade-tourism.com
```

---

## 📞 İletişim

Sorun yaşarsanız logları kontrol edin:

```bash
# Uygulama logları
pm2 logs maison-nomade-contact

# Nginx access logs
sudo tail -f /var/log/nginx/qr-maison-nomade-access.log

# Nginx error logs
sudo tail -f /var/log/nginx/qr-maison-nomade-error.log
```

**Başarılar!** 🚀
