import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to set these up
const EMAIL_CONFIG = {
  serviceID: 'service_tc_investments',
  contactTemplateID: 'template_contact_form',
  ebookTemplateID: 'template_ebook_signup',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY' // This will be replaced with your actual key
};

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey);

export const sendContactForm = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      service: formData.service,
      message: formData.message,
      to_email: 'thomas@tci-bv.com',
      subject: `New Contact Form Submission - ${formData.service}`,
      reply_to: formData.email
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.contactTemplateID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: 'Your message has been sent successfully!' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again or contact us directly.' 
    };
  }
};

export const sendEbookNotification = async (email) => {
  try {
    const templateParams = {
      user_email: email,
      to_email: 'thomas@tci-bv.com',
      subject: 'New Ebook Notification Signup',
      signup_date: new Date().toLocaleDateString(),
      signup_time: new Date().toLocaleTimeString()
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.ebookTemplateID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: 'Thank you! We\'ll notify you when the ebook is ready.' };
    } else {
      throw new Error('Failed to send notification signup');
    }
  } catch (error) {
    console.error('Ebook signup error:', error);
    return { 
      success: false, 
      message: 'Failed to sign up for notifications. Please try again.' 
    };
  }
};