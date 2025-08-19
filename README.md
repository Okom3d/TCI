# TC Investments - Professional Business Website

A modern, responsive business website built with React and FastAPI, featuring contact forms, ebook notifications, and spam protection.

![TC Investments](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-green)

## ✨ Features

- 🎨 **Modern Design**: Lime green accents on professional black backgrounds
- 📱 **Mobile Responsive**: Perfect display on all devices
- 🖼️ **Growth Carousel**: Professional business and investment imagery
- 📧 **Email Integration**: Contact forms with EmailJS
- 🛡️ **Spam Protection**: Google reCAPTCHA v2 on all forms
- ⏰ **Business Hours**: Belgian CET timezone display
- 🚀 **Performance Optimized**: Fast loading and smooth animations

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tc-investments.git
   cd tc-investments
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   yarn install
   
   # Backend
   cd ../backend
   pip install -r requirements.txt
   ```

3. **Start development**
   ```bash
   # Frontend (port 3000)
   cd frontend
   yarn start
   
   # Backend (port 8001)
   cd backend
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```

4. **Visit your website**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001

## 📁 Project Structure

```
tc-investments/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # Email service integration
│   │   ├── utils/           # Mock data and utilities
│   │   └── App.js           # Main application
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── backend/                 # FastAPI server
│   ├── server.py           # Main server file
│   └── requirements.txt    # Python dependencies
├── docs/                   # Documentation
└── README.md              # This file
```

## 🔧 Configuration

### EmailJS Setup (Required for contact forms)
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and templates
3. Keys are already configured in `frontend/src/services/emailService.js`

### reCAPTCHA Setup (Already configured)
- Site Key: `6LeQSKorAAAAAOgy3YurDIWS6SjMlHgB4mvJ2uSi`
- Forms are protected against spam

## 📖 Documentation

- [Installation Guide](docs/INSTALLATION.md) - Complete setup instructions
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment
- [Development Guide](docs/DEVELOPMENT.md) - Development workflow
- [API Documentation](docs/API.md) - Backend API reference

## 🌐 Pages

- **Homepage** (`/`) - Hero section, services, growth carousel
- **Contact** (`/contact`) - Contact form with reCAPTCHA
- **Ebook** (`/ebook`) - Ebook notification signup

## 🛡️ Security Features

- ✅ Google reCAPTCHA v2 on all forms
- ✅ Email validation and sanitization
- ✅ CORS protection
- ✅ Input validation
- ✅ No sensitive data in frontend code

## 🚀 Deployment Options

### Static Hosting (Recommended for frontend-only)
- **Netlify**: Connect GitHub repo for automatic deployments
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Free hosting for static sites

### Full-Stack Hosting
- **Railway**: Full-stack deployment with PostgreSQL
- **Render**: Free tier with automatic builds
- **DigitalOcean**: VPS deployment

## 📞 Support

For questions or support regarding this website:
- Business Inquiries: thomas@tci-bv.com
- Development: See documentation in `/docs`

## 📄 License

This project is proprietary software for TC Investments.

---

**Built with ❤️ for TC Investments**
