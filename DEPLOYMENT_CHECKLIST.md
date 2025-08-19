# 🚀 TC Investments - Deployment Checklist

Complete checklist to ensure your TC Investments website is ready for production deployment.

## ✅ Pre-Deployment Checklist

### 📋 Code Preparation
- [ ] All changes committed to Git
- [ ] Code reviewed and tested locally  
- [ ] No console errors in browser developer tools
- [ ] All forms work correctly with reCAPTCHA
- [ ] Email delivery tested to thomas@tci-bv.com
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed

### 🔧 Configuration Verification
- [ ] EmailJS service configured and tested
- [ ] EmailJS templates exist and work correctly
- [ ] reCAPTCHA Site Key configured: `6LeQSKorAAAAAOgy3YurDIWS6SjMlHgB4mvJ2uSi`
- [ ] No private API keys in frontend code
- [ ] All image URLs are accessible
- [ ] Business hours display correctly

### 🛡️ Security Checklist
- [ ] reCAPTCHA working on both forms
- [ ] Email validation functioning
- [ ] No sensitive data exposed in frontend
- [ ] HTTPS will be enabled on deployment
- [ ] Input sanitization verified

## 🌐 Domain & DNS Setup

### reCAPTCHA Domain Configuration
1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Edit your site configuration
3. Add your production domains:
   - [ ] `yourdomain.com`
   - [ ] `www.yourdomain.com`
4. Save changes

### DNS Configuration (if using custom domain)
- [ ] A record pointing to hosting provider IP
- [ ] CNAME record for www subdomain
- [ ] SSL certificate configured
- [ ] Domain propagation verified

## 📧 Email Integration Verification

### EmailJS Testing
- [ ] Service ID confirmed: `service_pnib13a`
- [ ] Public Key confirmed: `lGO_5LuJvGdjmWsFU`
- [ ] Templates exist:
  - [ ] `template_contact_form`
  - [ ] `template_ebook_signup`
- [ ] Test emails received at thomas@tci-bv.com

### Template Verification
Contact Form Template should include:
- [ ] `{{from_name}}` - Customer name
- [ ] `{{from_email}}` - Customer email  
- [ ] `{{company}}` - Customer company
- [ ] `{{service}}` - Service of interest
- [ ] `{{message}}` - Customer message
- [ ] Subject: "New Contact Form Submission - {{service}}"

Ebook Template should include:
- [ ] `{{user_email}}` - Signup email
- [ ] `{{signup_date}}` - Signup date
- [ ] `{{signup_time}}` - Signup time
- [ ] Subject: "New Ebook Notification Signup"

## 🚀 Deployment Options

### Option 1: Frontend-Only (Recommended)

#### Netlify Deployment
- [ ] GitHub repository connected
- [ ] Build settings configured:
  - Build command: `cd frontend && yarn build`
  - Publish directory: `frontend/build`
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Deploy preview tested

#### Vercel Deployment
- [ ] Project imported from GitHub
- [ ] Framework preset: Create React App
- [ ] Build settings verified
- [ ] Production deployment tested

#### GitHub Pages
- [ ] `gh-pages` package installed in frontend
- [ ] `homepage` field added to package.json
- [ ] Deploy script configured
- [ ] Pages deployment successful

### Option 2: Full-Stack Deployment

#### Railway
- [ ] GitHub repository connected
- [ ] Build configuration verified
- [ ] Environment variables set
- [ ] Database configured (if needed)
- [ ] Production deployment successful

#### Render
- [ ] Web service configured
- [ ] Build and start commands set
- [ ] Environment variables configured
- [ ] Deployment successful

## 📊 Performance & SEO

### Performance Checklist
- [ ] Images optimized (under 200KB each)
- [ ] CSS and JS minified in production build
- [ ] Lighthouse score > 90 for Performance
- [ ] First Contentful Paint < 2 seconds
- [ ] No unused dependencies

### SEO Basics
- [ ] Page titles descriptive and unique
- [ ] Meta descriptions added
- [ ] Proper heading structure (H1, H2, etc.)
- [ ] Alt text for images
- [ ] Responsive design verified

## 🧪 Post-Deployment Testing

### Functional Testing
- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Contact form submits successfully
- [ ] reCAPTCHA loads and functions
- [ ] Ebook signup works correctly
- [ ] Email notifications received
- [ ] Forms reset after successful submission

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Mobile Testing
- [ ] Responsive design on various screen sizes
- [ ] Touch-friendly buttons and forms
- [ ] Text readable without zooming
- [ ] Images scale properly
- [ ] Forms work on mobile keyboards

## 🔍 Monitoring Setup (Optional)

### Analytics
- [ ] Google Analytics configured (if desired)
- [ ] Event tracking for form submissions
- [ ] Goal conversions set up

### Error Monitoring
- [ ] Error tracking service configured (Sentry, etc.)
- [ ] Error notifications set up
- [ ] Performance monitoring active

## 📞 Launch Preparation

### Communication
- [ ] Stakeholders notified of launch timeline
- [ ] Launch announcement prepared
- [ ] Social media updates ready
- [ ] Email signature updated with new website

### Business Readiness
- [ ] thomas@tci-bv.com email monitoring active
- [ ] Response templates prepared for inquiries
- [ ] Follow-up process defined for leads
- [ ] Business hours updated if needed

## 🎉 Go-Live Checklist

### Final Launch Steps
- [ ] DNS switched to production
- [ ] SSL certificate verified
- [ ] Final functionality test completed
- [ ] Backup of previous site (if applicable)
- [ ] Launch announcement published
- [ ] Search engines notified (submit sitemap)

### Post-Launch Monitoring
- [ ] Monitor for 24 hours after launch
- [ ] Check email delivery functionality
- [ ] Verify analytics tracking
- [ ] Monitor for any error reports
- [ ] Collect initial user feedback

## 📋 Emergency Rollback Plan

If issues occur post-launch:
1. [ ] Rollback process documented
2. [ ] Previous version backup accessible
3. [ ] DNS rollback procedure ready
4. [ ] Stakeholder communication plan ready

---

## ⚡ Quick Deployment Commands

### Frontend Build & Test
```bash
cd frontend
yarn install
yarn build
yarn serve    # Test production build locally
```

### Deploy Script
```bash
chmod +x deploy.sh
./deploy.sh   # Automated preparation
```

### Netlify CLI (if using)
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=frontend/build
```

### Vercel CLI (if using)
```bash
npm install -g vercel
cd frontend
vercel --prod
```

---

**🎯 Success Criteria**: 
- Website loads quickly and correctly
- Forms submit and send emails to thomas@tci-bv.com  
- reCAPTCHA prevents spam
- Mobile experience is excellent
- Professional TC Investments branding maintained

**👨‍💻 Need Help?**: Check the complete documentation in `/docs/` folder or contact support.

---

**Congratulations! Your TC Investments website is ready to generate leads and grow your business! 🚀**