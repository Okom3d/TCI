# TC Investments - GitHub Pages Deployment Guide

Complete step-by-step guide to deploy your TC Investments website to GitHub Pages for free hosting.

## 🌟 Why GitHub Pages?

- ✅ **100% Free** - No hosting costs
- ✅ **Perfect for Frontend** - Your website uses EmailJS (no backend needed)
- ✅ **Automatic SSL** - HTTPS enabled by default
- ✅ **Custom Domains** - Add your own domain if desired
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Automatic Deployments** - Push to update

## 🚀 Step-by-Step Deployment

### **Step 1: Create GitHub Repository**

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New Repository"** (green button)
3. Repository settings:
   - **Name**: `tc-investments`
   - **Description**: `Professional TC Investments website with bilingual support`
   - **Public** (required for free GitHub Pages)
   - **Initialize with README**: ❌ Uncheck (you already have files)
4. Click **"Create Repository"**

### **Step 2: Upload Your Code**

```bash
# Navigate to your project directory
cd tc-investments

# Initialize git (if not already done)
git init

# Add GitHub as remote origin (replace YOURUSERNAME)
git remote add origin https://github.com/YOURUSERNAME/tc-investments.git

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: TC Investments website ready for deployment"

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Step 3: Update Configuration**

Edit `frontend/package.json` and replace `YOURUSERNAME` with your actual GitHub username:

```json
{
  "homepage": "https://YOURUSERNAME.github.io/tc-investments"
}
```

### **Step 4: Install GitHub Pages Dependencies**

```bash
# Navigate to frontend directory
cd frontend

# Install gh-pages package
yarn add --dev gh-pages

# Verify package.json has deploy scripts
yarn run deploy --help
```

### **Step 5: Deploy to GitHub Pages**

**Option A: Use the automated script**
```bash
# From project root directory
./deploy-github-pages.sh
```

**Option B: Manual deployment**
```bash
# Navigate to frontend directory
cd frontend

# Build and deploy
yarn build
yarn deploy
```

### **Step 6: Configure GitHub Repository**

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** section (left sidebar)
4. Source settings:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **"Save"**

### **Step 7: Wait for Deployment**

- GitHub will show: **"Your site is live at https://YOURUSERNAME.github.io/tc-investments"**
- Initial deployment: 5-10 minutes
- Future updates: 1-2 minutes

## 🔧 Post-Deployment Configuration

### **Update reCAPTCHA Domains**

**IMPORTANT**: Add your GitHub Pages domain to reCAPTCHA:

1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Select your TC Investments site
3. Add domains:
   - `YOURUSERNAME.github.io`
   - Your custom domain (if using one)
4. Save changes

### **Test Your Live Website**

Visit: `https://YOURUSERNAME.github.io/tc-investments`

**Testing Checklist:**
- [ ] Website loads correctly
- [ ] Language switcher works (🌐 EN/FR)
- [ ] Contact form submits successfully
- [ ] reCAPTCHA loads and functions
- [ ] Ebook signup works
- [ ] Mobile responsiveness
- [ ] All images load
- [ ] Navigation between pages works

## 🔄 Updating Your Website

### **For Future Updates:**

```bash
# Make your changes to the code
# Commit changes
git add .
git commit -m "Update website content"
git push origin main

# Deploy updates to GitHub Pages
cd frontend
yarn deploy
```

### **Automated Update Script:**
```bash
#!/bin/bash
# Quick update script
git add .
git commit -m "Website updates"
git push origin main
cd frontend && yarn deploy
echo "✅ Website updated!"
```

## 🌐 Custom Domain Setup (Optional)

### **If You Want Your Own Domain:**

1. **Buy a domain** (e.g., `tcinvestments.com`)

2. **Add CNAME file** in `frontend/public/`:
```
tcinvestments.com
```

3. **Configure DNS** at your domain provider:
```
Type: CNAME
Name: www
Value: YOURUSERNAME.github.io
```

4. **Update GitHub Settings**:
   - Repository Settings → Pages
   - Custom domain: `tcinvestments.com`
   - Enforce HTTPS: ✅ Check

5. **Update reCAPTCHA domains** with your custom domain

## 📊 Performance & SEO

### **Automatic Optimizations**
- ✅ **Minified CSS/JS** - Automatic in production build
- ✅ **Image Optimization** - Compressed images
- ✅ **HTTPS/SSL** - Automatic with GitHub Pages
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Caching** - Browser caching enabled

### **SEO Benefits**
- ✅ **Bilingual Content** - English and French
- ✅ **Professional Design** - High-quality user experience
- ✅ **Mobile Responsive** - Google mobile-first indexing
- ✅ **Fast Loading** - Good Core Web Vitals scores

## 🛠️ Troubleshooting

### **Common Issues:**

**1. Website Not Loading**
```bash
# Check if build was successful
cd frontend
yarn build

# Check for console errors in browser
# Verify homepage URL in package.json
```

**2. reCAPTCHA Not Working**
- Add GitHub Pages domain to reCAPTCHA console
- Check browser console for errors
- Verify site key is correct

**3. Forms Not Sending Emails**
- Test EmailJS configuration
- Check browser network tab
- Verify templates exist in EmailJS

**4. Language Switcher Issues**
- Check browser console for JavaScript errors
- Verify translation files exist
- Test localStorage functionality

**5. Deployment Failed**
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
yarn deploy
```

## 📈 Monitoring & Analytics

### **Add Google Analytics (Optional)**

1. Create Google Analytics account
2. Get tracking ID
3. Add to `frontend/public/index.html`:

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

## 🎉 Success!

After successful deployment, you'll have:

- ✅ **Live Website**: `https://YOURUSERNAME.github.io/tc-investments`
- ✅ **Professional Design**: Lime green on black, mobile-responsive
- ✅ **Bilingual Support**: English and French with language switcher
- ✅ **Working Forms**: Contact and ebook signup with reCAPTCHA
- ✅ **Email Integration**: Forms send to thomas@tci-bv.com
- ✅ **Free Hosting**: No monthly costs
- ✅ **SSL Certificate**: Secure HTTPS connection
- ✅ **Global CDN**: Fast loading worldwide

## 📞 Support

### **GitHub Pages Documentation**
- [Official GitHub Pages Docs](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### **Getting Help**
- Check GitHub repository Actions tab for deployment status
- Review browser console for JavaScript errors
- Test forms and functionality after each deployment

---

**🎊 Congratulations! Your TC Investments website is now live on the internet and ready to generate leads for your business!**

**Example URLs:**
- Main site: `https://YOURUSERNAME.github.io/tc-investments`
- Contact: `https://YOURUSERNAME.github.io/tc-investments/contact`
- Ebook: `https://YOURUSERNAME.github.io/tc-investments/ebook`