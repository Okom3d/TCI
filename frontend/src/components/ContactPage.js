import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Phone, Mail, MapPin } from "lucide-react";
import { mockData } from "../utils/mock";
import { sendContactForm } from "../services/emailService";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "consultation",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      const result = await sendContactForm(formData);
      
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
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="hero-title heading-1">GET IN TOUCH</h1>
            <p className="hero-description body-large">
              Ready to grow your business? Let's discuss how we can help you achieve your goals.
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
              <h2 className="form-title heading-3">SEND US A MESSAGE</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label caption">FULL NAME</label>
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
                  <label className="form-label caption">EMAIL ADDRESS</label>
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
                  <label className="form-label caption">COMPANY (OPTIONAL)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label caption">SERVICE OF INTEREST</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="consultation">Business Consultation</option>
                    <option value="investments">Investment Opportunities</option>
                    <option value="ai-consulting">AI Consulting</option>
                    <option value="ebook">Ebook Formations</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label caption">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your project or goals..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit">
                  SEND MESSAGE <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <h2 className="info-title heading-3">CONTACT INFO</h2>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label caption">CALL US</h4>
                    <p className="contact-value body-medium">{mockData.contactInfo.phone}</p>
                  </div>
                </div>
                
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

              <div className="business-hours">
                <h4 className="hours-title heading-5">BUSINESS HOURS</h4>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day caption">MONDAY - FRIDAY</span>
                    <span className="time body-small">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day caption">SATURDAY</span>
                    <span className="time body-small">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day caption">SUNDAY</span>
                    <span className="time body-small">CLOSED</span>
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
                Growing businesses through strategic investments, consulting, and AI solutions.
              </p>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/ebook" className="footer-link">Ebook</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright caption">© 2024 TC Investments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;