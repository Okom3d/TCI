import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, BookOpen, Phone, Mail, MapPin } from "lucide-react";
import { mockData } from "../utils/mock";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <h2 className="logo-text">TC INVESTMENTS</h2>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">ENTREPRENEUR<br />INVESTOR<br />CONSULTANT</h1>
            <p className="hero-description body-large">
              Always looking for new opportunities to grow businesses and create value through strategic investments and AI-powered solutions.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                GET STARTED <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/ebook" className="btn-secondary">
                EXPLORE EBOOK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title heading-2">OUR SERVICES</h2>
            <p className="section-subtitle body-medium">
              Three key areas where we create exceptional value for our clients
            </p>
          </div>
          
          <div className="services-grid">
            {mockData.services.map((service, index) => (
              <Link to={service.link} key={index} className="service-card">
                <div className="service-icon">
                  {service.icon === 'consultation' && <Users size={40} />}
                  {service.icon === 'investments' && <TrendingUp size={40} />}
                  {service.icon === 'ebook' && <BookOpen size={40} />}
                </div>
                <div className="service-content">
                  <h3 className="service-title heading-4">{service.title}</h3>
                  <p className="service-description body-small">{service.description}</p>
                  <div className="service-arrow">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title heading-2">SUCCESS STORIES</h2>
          <div className="carousel-container">
            <div className="carousel-track">
              {mockData.testimonials.map((testimonial, index) => (
                <div key={index} className="carousel-item">
                  <div className="testimonial-card">
                    <p className="testimonial-text body-medium">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4 className="author-name heading-6">{testimonial.author}</h4>
                        <p className="author-role caption">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4 className="contact-label caption">PHONE</h4>
                <p className="contact-value body-medium">{mockData.contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4 className="contact-label caption">EMAIL</h4>
                <p className="contact-value body-medium">{mockData.contactInfo.email}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4 className="contact-label caption">ADDRESS</h4>
                <p className="contact-value body-medium">{mockData.contactInfo.address}</p>
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

export default LandingPage;