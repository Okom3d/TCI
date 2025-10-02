import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, TrendingUp, Users, BookOpen, Mail, MapPin } from "lucide-react";
import { mockData } from "../utils/mock";
import LanguageSwitcher from "./LanguageSwitcher";

const LandingPage = () => {
  const { t } = useTranslation();

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
              <Link to="/" className="nav-link">{t('navigation.home')}</Link>
              <Link to="/contact" className="nav-link">{t('navigation.contact')}</Link>
              <LanguageSwitcher />
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
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-description body-large">
              {t('hero.description')}
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                {t('hero.getStarted')} <ArrowRight className="ml-2" size={20} />
              </Link>
                {/* Bouton Ebook supprimé */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title heading-2">{t('services.title')}</h2>
      <p className="section-subtitle body-medium">
        {t('services.subtitle')}
      </p>
    </div>

    <div className="services-grid">
      <Link to="/consultation" className="service-card">
        <div className="service-icon"><Users size={40} /></div>
        <div className="service-content">
          <h3 className="service-title heading-4">{t('services.consultation.title')}</h3>
          <p className="service-description body-small">{t('services.consultation.description')}</p>
          <div className="service-arrow"><ArrowRight size={24} /></div>
        </div>
      </Link>

      <Link to="/investments" className="service-card">
        <div className="service-icon"><TrendingUp size={40} /></div>
        <div className="service-content">
          <h3 className="service-title heading-4">{t('services.investments.title')}</h3>
          <p className="service-description body-small">{t('services.investments.description')}</p>
          <div className="service-arrow"><ArrowRight size={24} /></div>
        </div>
      </Link>

      {/* Carte Ebook supprimée */}
    </div>
  </div>
</section>

      {/* Growth Showcase Carousel */}
      <section className="growth-carousel-section">
        <div className="container">
          <h2 className="section-title heading-2">{t('carousel.title')}</h2>
          <p className="section-subtitle body-medium">
            {t('carousel.subtitle')}
          </p>
          <div className="carousel-container">
            <div className="carousel-track">
              {mockData.growthImages.map((image, index) => {
                const translationKeys = [
                  'strategicGrowth',
                  'dataDriven', 
                  'urbanDevelopment',
                  'investmentAnalysis',
                  'realEstateExcellence',
                  'nurturingGrowth'
                ];
                const key = translationKeys[index] || 'strategicGrowth';
                
                return (
                  <div key={index} className="carousel-item">
                    <div className="growth-card">
                      <div className="growth-image">
                        <img src={image.url} alt={t(`carousel.items.${key}.title`)} />
                        <div className="growth-overlay">
                          <h3 className="growth-title heading-5">{t(`carousel.items.${key}.title`)}</h3>
                          <p className="growth-description body-small">{t(`carousel.items.${key}.description`)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Duplicate for seamless loop */}
              {mockData.growthImages.map((image, index) => {
                const translationKeys = [
                  'strategicGrowth',
                  'dataDriven',
                  'urbanDevelopment', 
                  'investmentAnalysis',
                  'realEstateExcellence',
                  'nurturingGrowth'
                ];
                const key = translationKeys[index] || 'strategicGrowth';
                
                return (
                  <div key={`duplicate-${index}`} className="carousel-item">
                    <div className="growth-card">
                      <div className="growth-image">
                        <img src={image.url} alt={t(`carousel.items.${key}.title`)} />
                        <div className="growth-overlay">
                          <h3 className="growth-title heading-5">{t(`carousel.items.${key}.title`)}</h3>
                          <p className="growth-description body-small">{t(`carousel.items.${key}.description`)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section - Temporarily Hidden */}
      {/*
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
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
      */}

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
                {/* Lien Ebook supprimé */}
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

export default LandingPage;