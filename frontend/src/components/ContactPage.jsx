import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Send, Mail, MapPin } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { mockData } from "../utils/mock";
import { sendContactForm, RECAPTCHA_CONFIG } from "../services/emailService";
import LanguageSwitcher from "./LanguageSwitcher";

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "consultation",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const recaptchaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = recaptchaRef.current?.getValue();
      
      const result = await sendContactForm(formData, recaptchaToken);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "consultation",
          message: ""
        });
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <Link to="/" className="logo-text">TC INVESTMENTS</Link>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                <ArrowLeft size={20} className="mr-2" />
                {t('navigation.backToHome')}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="hero-title heading-1">{t('contact.heroTitle')}</h1>
            <p className="hero-description body-large">
              {t('contact.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="form-title heading-3">{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label caption">{t('contact.form.fullName')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label caption">{t('contact.form.emailAddress')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label caption">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label caption">{t('contact.form.serviceInterest')}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="consultation">{t('contact.services.consultation')}</option>
                    <option value="investments">{t('contact.services.investments')}</option>
                    <option value="ai-consulting">{t('contact.services.aiConsulting')}</option>
                    <option value="ebook">{t('contact.services.ebook')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label caption">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="form-textarea"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="form-group">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_CONFIG.siteKey}
                    theme="dark"
                    className="recaptcha-container"
                  />
                </div>

                <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.sendMessage')} <Send size={20} className="ml-2" />
                </button>

                {submitStatus && (
                  <div className={`status-message ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <h2 className="info-title heading-3">{t('contact.businessHours')}</h2>
              
              {/* Contact Info List - Temporarily Hidden */}
              {/*
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label caption">EMAIL US</h4>
                    <p className="contact-value body-medium">{mockData.contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label caption">VISIT US</h4>
                    <p className="contact-value body-medium">{mockData.contactInfo.address}</p>
                  </div>
                </div>
              </div>
              */}

              <div className="business-hours">
                <h4 className="hours-title heading-5">{t('contact.officeHours')}</h4>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day caption">{t('contact.hours.mondayFriday')}</span>
                    <span className="time body-small">{t('contact.hours.mondayFridayTime')}</span>
                  </div>
                  <div className="hours-item">
                    <span className="day caption">{t('contact.hours.saturday')}</span>
                    <span className="time body-small">{t('contact.hours.saturdayTime')}</span>
                  </div>
                  <div className="hours-item">
                    <span className="day caption">{t('contact.hours.sunday')}</span>
                    <span className="time body-small">{t('contact.hours.sundayTime')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-logo">TC INVESTMENTS</h3>
              <p className="footer-description body-small">
                {t('footer.description')}
              </p>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <Link to="/" className="footer-link">{t('navigation.home')}</Link>
                <Link to="/contact" className="footer-link">{t('navigation.contact')}</Link>
                <Link to="/ebook" className="footer-link">Ebook</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright caption">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;