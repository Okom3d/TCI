# TC Investments - Installation Guide

Complete installation and setup guide for the TC Investments website.

## 📋 Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **Yarn Package Manager**
   - Install: `npm install -g yarn`
   - Verify: `yarn --version`

3. **Python** (v3.10 or higher)
   - Download: https://python.org/
   - Verify: `python --version`

4. **Git**
   - Download: https://git-scm.com/
   - Verify: `git --version`

## 🚀 Installation Steps

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/tc-investments.git
cd tc-investments
```

### Step 2: Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

The frontend will be available at: **http://localhost:3000**

### Step 3: Backend Setup (Optional)

```bash
# Navigate to backend directory  
cd ../backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The backend API will be available at: **http://localhost:8001**

## 🔧 Configuration

### EmailJS Configuration (Required for Contact Forms)

The website uses EmailJS for contact form functionality. The configuration is already set up in the code, but you need to ensure your EmailJS account is properly configured.

**Current Configuration:**
- Service ID: `service_pnib13a`
- Public Key: `lGO_5LuJvGdjmWsFU`
- Contact Template: `template_contact_form`
- Ebook Template: `template_ebook_signup`

**EmailJS Account Setup:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Ensure these templates exist and are configured
3. Verify email service is connected to thomas@tci-bv.com

### reCAPTCHA Configuration (Already Configured)

Google reCAPTCHA is already configured with:
- Site Key: `6LeQSKorAAAAAOgy3YurDIWS6SjMlHgB4mvJ2uSi`
- Theme: Dark (matches website design)

## 📁 Project Structure After Installation

```
tc-investments/
├── frontend/
│   ├── node_modules/         # Installed packages (generated)
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactPage.js
│   │   │   ├── EbookPage.js
│   │   │   └── LandingPage.js
│   │   ├── services/
│   │   │   └── emailService.js
│   │   ├── utils/
│   │   │   └── mock.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── yarn.lock
├── backend/
│   ├── venv/                # Virtual environment (generated)
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── docs/
│   ├── INSTALLATION.md      # This file
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   └── API.md
├── contracts.md
└── README.md
```

## 🧪 Testing Installation

### Test Frontend
1. Visit http://localhost:3000
2. You should see the TC Investments homepage
3. Navigate to different pages (Contact, Ebook)
4. Verify reCAPTCHA appears on forms

### Test Email Forms
1. Fill out contact form completely
2. Complete reCAPTCHA
3. Submit form
4. Check thomas@tci-bv.com for email

### Test Ebook Signup
1. Go to /ebook page
2. Enter email address
3. Complete reCAPTCHA
4. Click "NOTIFY ME"
5. Check thomas@tci-bv.com for notification

## 🐛 Troubleshooting

### Common Issues

**1. Yarn not found**
```bash
npm install -g yarn
```

**2. Python virtual environment issues**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

**3. Port already in use**
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 8001
npx kill-port 8001
```

**4. reCAPTCHA not loading**
- Check browser console for errors
- Verify site key is correct
- Ensure localhost is added to reCAPTCHA domains

**5. Email forms not working**
- Verify EmailJS configuration
- Check browser network tab for API calls
- Confirm templates exist in EmailJS dashboard

### Environment Variables

The website uses only public keys that are safe to expose:
- **EmailJS Public Key**: Client-side only
- **reCAPTCHA Site Key**: Meant to be public
- **No private keys**: All sensitive keys are managed by third-party services

## ✅ Installation Complete

After successful installation, you should have:
- ✅ Frontend running on http://localhost:3000
- ✅ Beautiful lime green design
- ✅ Working contact forms with reCAPTCHA
- ✅ Professional growth image carousel
- ✅ Mobile-responsive design
- ✅ Email notifications to thomas@tci-bv.com

## 📞 Support

If you encounter issues during installation:
1. Check the troubleshooting section above
2. Review error messages carefully
3. Ensure all prerequisites are installed
4. Contact support if needed

---

**Next Steps**: See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment instructions.