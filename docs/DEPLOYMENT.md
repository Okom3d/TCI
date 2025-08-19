# TC Investments - Deployment Guide

Complete deployment guide for production hosting of the TC Investments website.

## 🎯 Deployment Options

The TC Investments website can be deployed in multiple ways depending on your needs:

### Option 1: Frontend-Only Deployment (Recommended)
- **Best for**: This website (contact forms work via EmailJS)
- **Cost**: Free tier available
- **Complexity**: Simple
- **Recommended platforms**: Netlify, Vercel, GitHub Pages

### Option 2: Full-Stack Deployment
- **Best for**: Future expansions with backend features
- **Cost**: Usually requires paid plans
- **Complexity**: More setup required
- **Recommended platforms**: Railway, Render, DigitalOcean

## 🌟 Frontend-Only Deployment (Recommended)

Since the website uses EmailJS for contact forms, you only need to deploy the frontend.

### Netlify Deployment (Recommended)

**1. Prepare your repository**
```bash
# Ensure your code is committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

**2. Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `cd frontend && yarn build`
   - **Publish directory**: `frontend/build`
   - **Base directory**: `/`

**3. Environment Variables (if needed)**
- Netlify will automatically use the environment variables from your code
- No additional configuration needed

**4. Custom Domain (Optional)**
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings

### Vercel Deployment

**1. Install Vercel CLI**
```bash
npm install -g vercel
```

**2. Deploy**
```bash
cd frontend
vercel --prod
```

**3. Configure Build Settings**
- Framework: Create React App
- Build command: `yarn build`
- Output directory: `build`

### GitHub Pages Deployment

**1. Install gh-pages**
```bash
cd frontend
yarn add --dev gh-pages
```

**2. Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/tc-investments",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

**3. Deploy**
```bash
yarn deploy
```

## 🏗️ Full-Stack Deployment

If you want to deploy both frontend and backend:

### Railway Deployment

**1. Create railway.json**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "cd frontend && yarn build && cd ../backend && uvicorn server:app --host 0.0.0.0 --port $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

**2. Deploy**
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Configure environment variables
4. Deploy

### Render Deployment

**1. Create render.yaml**
```yaml
services:
  - type: web
    name: tc-investments-frontend
    env: node
    buildCommand: cd frontend && yarn install && yarn build
    startCommand: cd frontend && npx serve -s build -l $PORT
    
  - type: web
    name: tc-investments-backend
    env: python
    buildCommand: cd backend && pip install -r requirements.txt
    startCommand: cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT
```

## 🔧 Production Configuration

### Frontend Build Optimization

**1. Update package.json scripts**
```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "build:production": "NODE_ENV=production craco build",
    "test": "craco test",
    "analyze": "npx webpack-bundle-analyzer build/static/js/*.js"
  }
}
```

**2. Environment Variables for Production**
Create `frontend/.env.production`:
```env
REACT_APP_BACKEND_URL=https://your-backend-domain.com
GENERATE_SOURCEMAP=false
```

### Performance Optimizations

**1. Enable Gzip Compression**
Most hosting platforms enable this automatically.

**2. Add Service Worker (Optional)**
```bash
cd frontend
yarn add workbox-webpack-plugin
```

**3. Optimize Images**
```bash
cd frontend
yarn add imagemin-webpack-plugin
```

## 🌐 Domain Configuration

### Custom Domain Setup

**1. DNS Configuration**
For Netlify/Vercel:
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

**2. SSL Certificate**
- Netlify/Vercel: Automatic SSL
- Custom hosting: Use Let's Encrypt

### reCAPTCHA Domain Update

**Important**: Update your reCAPTCHA configuration:
1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Edit your site
3. Add your production domain:
   - `yourdomain.com`
   - `www.yourdomain.com`

## 🧪 Testing Production Deploy

### Pre-deployment Checklist

- [ ] All forms work correctly
- [ ] reCAPTCHA loads and functions
- [ ] EmailJS sends emails to thomas@tci-bv.com
- [ ] Mobile responsiveness tested
- [ ] All images load correctly
- [ ] Navigation works between pages
- [ ] No console errors
- [ ] Performance is acceptable

### Post-deployment Testing

**1. Functional Testing**
```bash
# Test all pages
curl -I https://yourdomain.com
curl -I https://yourdomain.com/contact  
curl -I https://yourdomain.com/ebook
```

**2. Form Testing**
1. Submit contact form with real data
2. Complete reCAPTCHA
3. Verify email arrives at thomas@tci-bv.com
4. Test ebook signup form

**3. Performance Testing**
- Use Google PageSpeed Insights
- Test mobile performance
- Check loading speeds

## 📊 Monitoring & Analytics

### Google Analytics (Optional)

**1. Add tracking code to public/index.html**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Error Monitoring

Consider adding error monitoring:
- Sentry for error tracking
- LogRocket for user session recording

## 🔒 Security Considerations

### Production Security Checklist

- [ ] HTTPS enabled
- [ ] reCAPTCHA working
- [ ] No sensitive data in frontend code
- [ ] CORS properly configured
- [ ] Content Security Policy (if needed)
- [ ] Regular dependency updates

### Security Headers (Optional)

Add to hosting platform:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## 🎉 Deployment Complete

After successful deployment, you should have:
- ✅ Live website at your domain
- ✅ Working contact forms
- ✅ reCAPTCHA protection
- ✅ Email notifications to thomas@tci-bv.com
- ✅ Mobile-responsive design
- ✅ Professional TC Investments branding

## 📞 Support

If you encounter deployment issues:
1. Check platform-specific documentation
2. Review build logs for errors
3. Test locally first
4. Contact platform support if needed

---

**Next Steps**: Consider setting up monitoring and analytics for your production website.