# TC Investments - API Documentation

Documentation for the TC Investments website API endpoints and integrations.

## 📡 API Overview

The TC Investments website uses a hybrid approach:
- **Frontend-only deployment** with third-party service integrations
- **Optional backend** for future expansion
- **EmailJS** for contact form handling
- **Google reCAPTCHA** for spam protection

## 🔌 Third-Party Integrations

### EmailJS Integration

**Service Configuration**:
```javascript
const EMAIL_CONFIG = {
  serviceID: 'service_pnib13a',
  contactTemplateID: 'template_contact_form',
  ebookTemplateID: 'template_ebook_signup',
  publicKey: 'lGO_5LuJvGdjmWsFU'
};
```

**Contact Form API Call**:
```javascript
// Method: POST
// Service: EmailJS
// Endpoint: https://api.emailjs.com/api/v1.0/email/send

const templateParams = {
  from_name: "John Doe",
  from_email: "john@example.com",
  company: "Example Corp",
  service: "consultation",
  message: "I'm interested in your services",
  to_email: "thomas@tci-bv.com",
  subject: "New Contact Form Submission - consultation",
  reply_to: "john@example.com",
  recaptcha_token: "recaptcha_response_token"
};
```

**Ebook Notification API Call**:
```javascript
// Method: POST
// Service: EmailJS
// Endpoint: https://api.emailjs.com/api/v1.0/email/send

const templateParams = {
  user_email: "user@example.com",
  to_email: "thomas@tci-bv.com",
  subject: "New Ebook Notification Signup",
  signup_date: "12/25/2024",
  signup_time: "2:30 PM",
  recaptcha_token: "recaptcha_response_token"
};
```

### Google reCAPTCHA Integration

**Configuration**:
```javascript
const RECAPTCHA_CONFIG = {
  siteKey: '6LeQSKorAAAAAOgy3YurDIWS6SjMlHgB4mvJ2uSi'
};
```

**Verification Process**:
1. User completes reCAPTCHA challenge
2. Frontend receives response token
3. Token included in EmailJS request
4. EmailJS forwards complete data to thomas@tci-bv.com

## 🖥️ Optional Backend API

The website includes an optional FastAPI backend for future expansion.

### Base URL
```
Development: http://localhost:8001
Production: https://your-domain.com/api
```

### Authentication
Currently no authentication required. All endpoints are public.

### Error Response Format
```json
{
  "status": "error",
  "message": "Error description",
  "details": "Additional error details (optional)"
}
```

### Success Response Format
```json
{
  "status": "success",
  "message": "Success message",
  "data": "Response data (optional)"
}
```

## 📨 Email Endpoints (Backend)

### Health Check
```http
GET /api/
```

**Response**:
```json
{
  "message": "Hello World"
}
```

### Create Status Check
```http
POST /api/status
Content-Type: application/json

{
  "client_name": "TC Investments Website"
}
```

**Response**:
```json
{
  "id": "uuid4-string",
  "client_name": "TC Investments Website",
  "timestamp": "2024-12-25T14:30:00Z"
}
```

### Get Status Checks
```http
GET /api/status
```

**Response**:
```json
[
  {
    "id": "uuid4-string",
    "client_name": "TC Investments Website",
    "timestamp": "2024-12-25T14:30:00Z"
  }
]
```

## 🛡️ Security Implementation

### reCAPTCHA Validation Flow

1. **Frontend Validation**:
```javascript
const recaptchaToken = recaptchaRef.current?.getValue();
if (!recaptchaToken) {
  return {
    success: false,
    message: 'Please complete the reCAPTCHA verification.'
  };
}
```

2. **Token Inclusion**:
All form submissions include the reCAPTCHA token in the email template.

3. **Server-side Verification** (if using backend):
```python
import requests

def verify_recaptcha(token, secret_key):
    response = requests.post(
        'https://www.google.com/recaptcha/api/siteverify',
        data={
            'secret': secret_key,
            'response': token
        }
    )
    return response.json().get('success', False)
```

### Input Validation

**Frontend Validation**:
```javascript
// Email validation
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isValidEmail = emailRegex.test(email);

// Required field validation
const isRequired = value => value && value.trim().length > 0;

// Form validation
const validateContactForm = (formData) => {
  const errors = {};
  
  if (!isRequired(formData.name)) {
    errors.name = 'Name is required';
  }
  
  if (!isValidEmail(formData.email)) {
    errors.email = 'Valid email address is required';
  }
  
  if (!isRequired(formData.message)) {
    errors.message = 'Message is required';
  }
  
  return errors;
};
```

## 📊 Data Models

### Contact Form Data
```typescript
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: 'consultation' | 'investments' | 'ai-consulting' | 'ebook';
  message: string;
}
```

### Ebook Signup Data
```typescript
interface EbookSignupData {
  email: string;
}
```

### Email Template Data
```typescript
interface ContactEmailTemplate {
  from_name: string;
  from_email: string;
  company: string;
  service: string;
  message: string;
  to_email: string;
  subject: string;
  reply_to: string;
  recaptcha_token: string;
}

interface EbookEmailTemplate {
  user_email: string;
  to_email: string;
  subject: string;
  signup_date: string;
  signup_time: string;
  recaptcha_token: string;
}
```

## 🔄 API Integration Examples

### Contact Form Submission
```javascript
// services/emailService.js
export const sendContactForm = async (formData, recaptchaToken) => {
  try {
    // Validate reCAPTCHA
    if (!recaptchaToken) {
      throw new Error('reCAPTCHA verification required');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      service: formData.service,
      message: formData.message,
      to_email: 'thomas@tci-bv.com',
      subject: `New Contact Form Submission - ${formData.service}`,
      reply_to: formData.email,
      recaptcha_token: recaptchaToken
    };

    // Send via EmailJS
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.contactTemplateID,
      templateParams
    );

    return {
      success: response.status === 200,
      message: response.status === 200 
        ? 'Your message has been sent successfully!' 
        : 'Failed to send message'
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    };
  }
};
```

### Error Handling
```javascript
// Component error handling
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const recaptchaToken = recaptchaRef.current?.getValue();
    const result = await sendContactForm(formData, recaptchaToken);
    
    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: result.message
      });
      // Reset form
      resetForm();
    } else {
      setSubmitStatus({
        type: 'error',
        message: result.message
      });
    }
  } catch (error) {
    setSubmitStatus({
      type: 'error',
      message: 'An unexpected error occurred. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🌐 CORS Configuration

### Development CORS
```python
# backend/server.py
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Production CORS
```python
# Production CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[
        "https://yourdomain.com", 
        "https://www.yourdomain.com"
    ],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
```

## 📈 Rate Limiting

### EmailJS Rate Limits
- **Free Plan**: 200 emails/month
- **Paid Plans**: Higher limits available
- **Rate Limiting**: Built into EmailJS service

### reCAPTCHA Rate Limits
- **No explicit limits** for site key usage
- **Automatic throttling** for suspicious activity
- **Enterprise options** available for high traffic

## 🔍 Monitoring & Logging

### Frontend Error Tracking
```javascript
// Error boundary for React components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo);
    // Send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### API Call Monitoring
```javascript
// Service monitoring
const monitorApiCall = async (serviceName, apiCall) => {
  const startTime = Date.now();
  try {
    const result = await apiCall();
    const duration = Date.now() - startTime;
    console.log(`${serviceName} succeeded in ${duration}ms`);
    return result;
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`${serviceName} failed after ${duration}ms:`, error);
    throw error;
  }
};
```

## 📞 Support & Troubleshooting

### Common Issues

**1. Email not sending**
- Check EmailJS configuration
- Verify reCAPTCHA completion
- Check browser console for errors

**2. reCAPTCHA not loading**
- Verify site key is correct
- Check domain configuration
- Ensure proper script loading

**3. Form validation errors**
- Check required field validation
- Verify email format validation
- Test reCAPTCHA integration

### Debug Tools
```javascript
// Debug mode for development
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('Form data:', formData);
  console.log('reCAPTCHA token:', recaptchaToken);
  console.log('EmailJS response:', response);
}
```

---

**For additional support**: Check the troubleshooting section in [DEVELOPMENT.md](DEVELOPMENT.md)