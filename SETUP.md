# Ubuntu Server Setup Guide - Bruncho UK

Domain: uk.maison-nomade-tourism.com

## Step 1: Install Node.js (if not installed)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Step 2: Clone the repository

```bash
cd /var/www
sudo git clone https://github.com/j1vetr/Nomade2.git bruncho-uk
sudo chown -R $USER:$USER /var/www/bruncho-uk
cd bruncho-uk
```

## Step 3: Install dependencies and build

```bash
npm install
npm run build
```

## Step 4: Setup Nginx configuration

```bash
sudo cp nginx-bruncho-uk.conf /etc/nginx/sites-available/bruncho-uk.conf
sudo ln -s /etc/nginx/sites-available/bruncho-uk.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Step 5: Setup SSL with Certbot (HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d uk.maison-nomade-tourism.com
```

## Step 6: Test the site

Open: https://uk.maison-nomade-tourism.com

---

## Future Updates

When you need to update the site:

```bash
cd /var/www/bruncho-uk
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
```

Or use the deploy script:

```bash
cd /var/www/bruncho-uk
chmod +x deploy.sh
./deploy.sh
```
