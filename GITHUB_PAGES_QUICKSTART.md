# 🚀 GitHub Pages Quick Start - TC Investments

**Fast deployment guide to get your website live in 10 minutes!**

## ⚡ Quick Commands

### **1. Create GitHub Repository**
- Go to [GitHub.com](https://github.com)
- Create new repository: `tc-investments`
- Make it **public** (required for free GitHub Pages)

### **2. Upload Your Code**
```bash
# From your tc-investments directory
git init
git remote add origin https://github.com/YOURUSERNAME/tc-investments.git
git add .
git commit -m "TC Investments website ready for deployment"
git push -u origin main
```

### **3. Configure for GitHub Pages**
Edit `frontend/package.json` - add this line after `"private": true,`:
```json
"homepage": "https://YOURUSERNAME.github.io/tc-investments",
```

### **4. Install & Deploy**
```bash
cd frontend
yarn add --dev gh-pages
yarn build
yarn deploy
```

### **5. Configure GitHub Repository**
1. Go to repository on GitHub
2. Settings → Pages
3. Source: **Deploy from branch**
4. Branch: **gh-pages**
5. Save

### **6. Update reCAPTCHA**
1. Go to [reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Add domain: `YOURUSERNAME.github.io`
3. Save

## 🎉 **Done!**

Your website will be live at:
**`https://YOURUSERNAME.github.io/tc-investments`**

*(Replace YOURUSERNAME with your actual GitHub username)*

---

## 🔄 **Future Updates**
```bash
# Make changes to your code, then:
git add .
git commit -m "Update website"
git push origin main
cd frontend && yarn deploy
```

## ✅ **Test Your Live Site**
- [ ] Website loads
- [ ] Language switcher works (🌐 EN/FR)  
- [ ] Contact form sends emails
- [ ] reCAPTCHA functions
- [ ] Mobile responsive

---

**📖 Need detailed instructions?** See `docs/GITHUB_PAGES_DEPLOYMENT.md`

**🎊 Congratulations! Your professional TC Investments website is now live on the internet!**