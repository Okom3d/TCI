# TC Investments - Development Guide

Complete development guide for customizing and extending the TC Investments website.

## 🏗️ Development Environment

### Prerequisites
- Node.js 18+
- Yarn package manager
- Python 3.10+ (for backend development)
- Git
- Code editor (VS Code recommended)

### Development Setup
```bash
# Clone and setup
git clone https://github.com/yourusername/tc-investments.git
cd tc-investments

# Frontend development
cd frontend
yarn install
yarn start  # Runs on http://localhost:3000

# Backend development (optional)
cd backend
pip install -r requirements.txt
uvicorn server:app --reload  # Runs on http://localhost:8001
```

## 📁 Project Architecture

### Frontend Structure
```
frontend/src/
├── components/           # React components
│   ├── LandingPage.js   # Homepage component
│   ├── ContactPage.js   # Contact form page
│   └── EbookPage.js     # Ebook signup page
├── services/            # External service integrations
│   └── emailService.js  # EmailJS integration
├── utils/               # Utilities and helpers
│   └── mock.js          # Mock data for content
├── App.css             # Main stylesheet
├── App.js              # Main application component
└── index.js            # Application entry point
```

### Backend Structure (Optional)
```
backend/
├── server.py           # FastAPI main server
├── requirements.txt    # Python dependencies
└── .env               # Environment variables
```

## 🎨 Customization Guide

### Colors and Branding

**Main Colors (defined in App.css)**
```css
:root {
  --brand-primary: #d9fb06;     /* Lime green */
  --bg-page: #1a1c1b;          /* Main black background */
  --bg-card: #302f2c;          /* Card backgrounds */
  --text-white: #ffffff;        /* White text */
  --text-secondary: #888680;    /* Gray text */
}
```

**To change the brand color:**
1. Update `--brand-primary` in `App.css`
2. Update reCAPTCHA theme if needed
3. Test all interactive elements

### Content Updates

**Company Information** (in `utils/mock.js`):
```javascript
// Update business hours
contactInfo: {
  // Contact info temporarily removed
},

// Update services
services: [
  {
    title: "YOUR SERVICE",
    description: "Your service description",
    icon: "icon-name",
    link: "/your-link"
  }
]
```

**Page Content**:
- **Homepage**: Edit `components/LandingPage.js`
- **Contact**: Edit `components/ContactPage.js`
- **Ebook**: Edit `components/EbookPage.js`

### Adding New Pages

**1. Create new component**
```javascript
// src/components/NewPage.js
import React from "react";

const NewPage = () => {
  return (
    <div className="new-page">
      <h1>New Page</h1>
      {/* Your content */}
    </div>
  );
};

export default NewPage;
```

**2. Add route to App.js**
```javascript
import NewPage from "./components/NewPage";

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

**3. Add navigation link**
```javascript
<Link to="/new-page" className="nav-link">NEW PAGE</Link>
```

### Styling Modifications

**Using CSS Classes**:
The website uses a custom CSS system with predefined classes:

```css
/* Typography */
.heading-1, .heading-2, .heading-3  /* Main headings */
.body-large, .body-medium, .body-small  /* Body text */
.caption  /* Small text */

/* Components */
.btn-primary, .btn-secondary  /* Buttons */
.service-card, .growth-card  /* Cards */
.form-input, .form-textarea  /* Form elements */
```

**Adding Custom Styles**:
1. Add to `App.css`
2. Follow the existing naming convention
3. Use CSS variables for colors

### Image Management

**Growth Carousel Images** (in `utils/mock.js`):
```javascript
growthImages: [
  {
    url: "https://your-image-url.com/image.jpg",
    title: "Your Title",
    description: "Your description"
  }
]
```

**Recommended Image Specs**:
- Carousel: 400x300px, optimized JPEGs
- Format: WebP preferred, JPEG fallback
- Size: Under 200KB each

## 🔧 Email Integration

### EmailJS Configuration

**Service Configuration** (in `services/emailService.js`):
```javascript
const EMAIL_CONFIG = {
  serviceID: 'your_service_id',
  contactTemplateID: 'your_contact_template',
  ebookTemplateID: 'your_ebook_template',
  publicKey: 'your_public_key'
};
```

### Email Templates

**Contact Form Template**:
```
Subject: New Contact Form Submission - {{service}}

Hello,
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service: {{service}}
Message: {{message}}
```

**Ebook Template**:
```
Subject: New Ebook Notification Signup

New signup: {{user_email}}
Date: {{signup_date}}
Time: {{signup_time}}
```

### Form Validation

**Adding Custom Validation**:
```javascript
// In ContactPage.js
const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }
  
  if (!formData.email.includes('@')) {
    errors.email = "Valid email required";
  }
  
  return errors;
};
```

## 🛡️ Security Configurations

### reCAPTCHA Setup

**Current Configuration**:
- Site Key: `6LeQSKorAAAAAOgy3YurDIWS6SjMlHgB4mvJ2uSi`
- Theme: Dark (matches design)
- Type: Checkbox ("I'm not a robot")

**Customizing reCAPTCHA**:
```javascript
<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={RECAPTCHA_CONFIG.siteKey}
  theme="dark"  // or "light"
  size="normal"  // or "compact"
  badge="bottomright"  // positioning
/>
```

### Input Sanitization

**Built-in Protection**:
- Email validation
- Required field validation
- reCAPTCHA verification
- EmailJS handles email sanitization

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1199px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1200px) {
  /* Desktop styles */
}
```

### Mobile Optimizations
- Responsive grid layouts
- Touch-friendly button sizes (min 48px)
- Optimized font sizes
- Compressed images

## 🧪 Testing

### Running Tests
```bash
# Frontend tests
cd frontend
yarn test

# Build test
yarn build
```

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] reCAPTCHA works
- [ ] Emails arrive at destination
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Performance Optimization

### Bundle Analysis
```bash
cd frontend
yarn build
npx webpack-bundle-analyzer build/static/js/*.js
```

### Optimization Techniques
1. **Image Optimization**: Use WebP format
2. **Code Splitting**: Lazy load components
3. **CSS Optimization**: Remove unused styles
4. **Caching**: Set appropriate cache headers

### Performance Targets
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 4s

## 🔄 Development Workflow

### Git Workflow
```bash
# Feature development
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
# Create pull request
```

### Code Style
- Use Prettier for formatting
- Follow React best practices
- Use semantic HTML
- Write descriptive commit messages

### Environment Management
- Development: localhost
- Staging: staging domain
- Production: live domain

## 📊 Analytics Integration

### Google Analytics
```javascript
// Add to index.html
gtag('config', 'GA_TRACKING_ID', {
  page_title: 'TC Investments',
  page_location: window.location.href
});
```

### Event Tracking
```javascript
// Track form submissions
gtag('event', 'form_submit', {
  event_category: 'engagement',
  event_label: 'contact_form'
});
```

## 🐛 Common Issues & Solutions

### Build Issues
```bash
# Clear cache
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
```

### Email Issues
- Verify EmailJS configuration
- Check reCAPTCHA is completed
- Confirm email templates exist

### Style Issues
- Check CSS specificity
- Verify CSS variables are defined
- Test cross-browser compatibility

## 📞 Development Support

### Resources
- [React Documentation](https://reactjs.org/docs)
- [EmailJS Documentation](https://emailjs.com/docs)
- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha)

### Getting Help
1. Check this documentation
2. Review error messages
3. Test in isolation
4. Search existing issues

---

**Happy Coding!** 🚀 The TC Investments website is built for extensibility and customization.