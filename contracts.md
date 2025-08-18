# TC Investments - Email Integration Contracts

## Overview
This document outlines the email integration system for TC Investments website using EmailJS for direct email forwarding to thomas@tci-bv.com.

## Implementation Status: ✅ FRONTEND READY - NEEDS EMAILJS SETUP

### Email Integration Method: EmailJS (Option 1)
- **Service**: EmailJS Browser SDK
- **Approach**: Direct frontend-to-email forwarding
- **Target Email**: thomas@tci-bv.com
- **No Backend Required**: All email functionality handled by EmailJS service

## Email Services Implemented

### 1. Contact Form Email (`sendContactForm`)
**Purpose**: Send contact form submissions directly to thomas@tci-bv.com

**Data Sent**:
- Name (from_name)
- Email (from_email)
- Company (company) - optional
- Service of Interest (service)
- Message (message)
- Reply-to email for easy response

**Email Template Variables**:
```
- {{from_name}} - Customer's name
- {{from_email}} - Customer's email
- {{company}} - Customer's company (or "Not specified")
- {{service}} - Service they're interested in
- {{message}} - Their message
- {{to_email}} - thomas@tci-bv.com
- {{subject}} - "New Contact Form Submission - [service]"
- {{reply_to}} - Customer's email for easy replies
```

### 2. Ebook Notification Email (`sendEbookNotification`)
**Purpose**: Notify thomas@tci-bv.com when someone signs up for ebook notifications

**Data Sent**:
- User's email address (user_email)
- Signup date and time
- Notification to thomas@tci-bv.com

**Email Template Variables**:
```
- {{user_email}} - Person who signed up
- {{to_email}} - thomas@tci-bv.com
- {{subject}} - "New Ebook Notification Signup"
- {{signup_date}} - Date of signup
- {{signup_time}} - Time of signup
```

## EmailJS Setup Required

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create account and verify email

### Step 2: Add Email Service
1. Go to Email Services
2. Add service (Gmail, Outlook, or Custom SMTP)
3. Connect thomas@tci-bv.com account

### Step 3: Create Email Templates

#### Contact Form Template (`template_contact_form`):
```
Subject: New Contact Form Submission - {{service}}

Hello Thomas,

You have received a new contact form submission from your TC Investments website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service of Interest: {{service}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}} at {{from_email}}.

Best regards,
TC Investments Website
```

#### Ebook Notification Template (`template_ebook_signup`):
```
Subject: New Ebook Notification Signup

Hello Thomas,

Someone new has signed up for ebook notifications on your TC Investments website:

Email: {{user_email}}
Signup Date: {{signup_date}}
Signup Time: {{signup_time}}

They will be notified when your ebooks are ready for release.

Best regards,
TC Investments Website
```

### Step 4: Update Configuration
Replace in `/app/frontend/src/services/emailService.js`:

```javascript
const EMAIL_CONFIG = {
  serviceID: 'YOUR_SERVICE_ID',        // From EmailJS dashboard
  contactTemplateID: 'YOUR_CONTACT_TEMPLATE_ID',     // Contact form template ID
  ebookTemplateID: 'YOUR_EBOOK_TEMPLATE_ID',         // Ebook signup template ID
  publicKey: 'YOUR_PUBLIC_KEY'         // Your EmailJS public key
};
```

## User Experience Flow

### Contact Form:
1. User fills out contact form
2. Clicks "SEND MESSAGE" button
3. Button shows "SENDING..." during submission
4. Success: Green message "Your message has been sent successfully!"
5. Error: Red message with error details
6. Form resets on successful submission

### Ebook Notification:
1. User enters email address
2. Clicks "NOTIFY ME" button  
3. Button shows "SIGNING UP..." during submission
4. Success: Green message "Thank you! We'll notify you when the ebook is ready."
5. Error: Red message with error details
6. Email field resets on successful submission

## Contact Information Updated
- **Phone**: 🇧🇪 +32 483 51 59 85
- **Email**: thomas@tci-bv.com
- **Address**: Floraliënlaan 2, 2600 Anvers, Belgium

## Frontend Components Updated
- ✅ ContactPage.js - Integrated with sendContactForm
- ✅ EbookPage.js - Integrated with sendEbookNotification
- ✅ emailService.js - Core email functionality
- ✅ Status message styling added to App.css
- ✅ Loading states and error handling implemented

## Next Steps
1. **Get EmailJS credentials** from thomas@tci-bv.com
2. **Update emailService.js** with actual IDs and public key
3. **Test email functionality** with real submissions
4. **Verify emails arrive** at thomas@tci-bv.com
5. **Optional**: Set up auto-replies or email organization

## Benefits of This Approach
- ✅ **Simple**: No backend email server setup
- ✅ **Secure**: No API keys exposed in frontend
- ✅ **Reliable**: EmailJS handles email delivery
- ✅ **Fast**: Direct frontend to email delivery
- ✅ **Cost-effective**: EmailJS free tier supports up to 200 emails/month
- ✅ **Professional**: Properly formatted emails with TC Investments branding