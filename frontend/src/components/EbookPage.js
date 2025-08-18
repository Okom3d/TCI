import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Mail } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { mockData } from "../utils/mock";
import { sendEbookNotification, RECAPTCHA_CONFIG } from "../services/emailService";

const EbookPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const recaptchaRef = useRef(null);

  const handleNotifySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = recaptchaRef.current?.getValue();
      
      const result = await sendEbookNotification(email, recaptchaToken);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        setEmail(""); // Reset email field on success
        recaptchaRef.current?.reset(); // Reset reCAPTCHA
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
    <div className="ebook-page">
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

      {/* Coming Soon Hero */}
      <section className="coming-soon-hero">
        <div className="container">
          <div className="coming-soon-content">
            <div className="status-badge">
              <Clock size={16} />
              <span className="caption">COMING SOON</span>
            </div>
            
            <h1 className="hero-title heading-1">EBOOK FORMATIONS</h1>
            
            <p className="hero-description body-large">
              Comprehensive guides covering diverse topics from business growth strategies to parenting excellence. 
              As a father of a 2.5-year-old, I believe in continuous improvement in every aspect of life - 
              get ready to transform with our exclusive educational content.
            </p>

            <div className="coming-soon-features">
              <div className="feature-list">
                {mockData.ebookFeatures.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">•</div>
                    <span className="feature-text body-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="notify-section">
              <h3 className="notify-title heading-4">GET NOTIFIED WHEN IT'S READY</h3>
              <p className="notify-description body-small">
                Be the first to know when our comprehensive business formation ebook becomes available.
              </p>
              
              <div className="notify-form">
                <form onSubmit={handleNotifySubmit}>
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="notify-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  
                  {/* reCAPTCHA */}
                  <div className="recaptcha-container-ebook">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_CONFIG.siteKey}
                      theme="dark"
                      className="recaptcha-ebook"
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary notify-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'SIGNING UP...' : 'NOTIFY ME'} <Mail size={20} className="ml-2" />
                  </button>
                </form>
                
                {submitStatus && (
                  <div className={`status-message ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="preview-section">
        <div className="container">
          <h2 className="section-title heading-2">WHAT TO EXPECT</h2>
          
          <div className="preview-grid">
            {mockData.ebookChapters.map((chapter, index) => (
              <div key={index} className="preview-card">
                <div className="chapter-number">
                  <span className="number heading-3">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="chapter-content">
                  <h3 className="chapter-title heading-5">{chapter.title}</h3>
                  <p className="chapter-description body-small">{chapter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title heading-2">READY TO GROW YOUR BUSINESS NOW?</h2>
            <p className="cta-description body-medium">
              Don't wait for the ebook. Start your transformation today with our consultation services.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                START CONSULTATION
              </Link>
              <Link to="/investments" className="btn-secondary">
                EXPLORE INVESTMENTS
              </Link>
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

export default EbookPage;