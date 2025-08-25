# TC Investments - Language & Internationalization Guide

Complete guide for managing bilingual functionality (English/French) on the TC Investments website.

## 🌐 Overview

The TC Investments website supports full bilingual functionality with:
- **English (EN)** - Default language
- **French (FR)** - Complete French translation
- **Language Switcher** - Globe icon with flag indicators
- **Persistent Selection** - Language choice saved in browser
- **Professional Translations** - Business-appropriate terminology

## 🔧 Technical Implementation

### Libraries Used
- **react-i18next** (v15.7.2) - React internationalization
- **i18next** (v25.4.2) - Core internationalization framework
- **i18next-browser-languagedetector** - Automatic language detection

### File Structure
```
frontend/src/i18n/
├── i18n.js                 # Main configuration
└── locales/                # Translation files
    ├── en.json             # English translations
    └── fr.json             # French translations
```

## 📝 Translation Files

### English (`en.json`)
Complete English translations for all website content including:
- Navigation elements
- Hero section content
- Service descriptions
- Contact form labels
- Business hours
- Error messages
- Footer content

### French (`fr.json`)  
Professional French translations with business-appropriate terminology:
- **ENTREPRENEUR** → **ENTREPRENEUR**
- **INVESTOR** → **INVESTISSEUR**
- **CONSULTANT** → **CONSEILLER**
- **HOME** → **ACCUEIL**
- **CONTACT** → **CONTACT**
- **GET IN TOUCH** → **CONTACTEZ-NOUS**

## 🎛️ Language Switcher Component

### Features
- **Globe Icon** (🌐) with country flags
- **Current Language Indicator** (EN/FR)
- **Dropdown Menu** with both language options
- **Hover Effects** matching website design
- **Mobile Responsive** scaling

### Visual Design
```css
.language-switcher {
  /* Lime green border on hover */
  /* Dark theme matching website */
  /* Professional flag indicators */
}
```

## 🔄 Language Detection & Storage

### Detection Priority
1. **localStorage** - Previously selected language
2. **Browser Navigator** - Browser's preferred language
3. **HTML Tag** - Document language attribute
4. **Fallback** - English (default)

### Storage
- Language preference saved to `localStorage`
- Key: `i18nextLng`
- Values: `en` or `fr`

## 📱 User Experience

### Language Switching Flow
1. User clicks globe icon (🌐 🇬🇧 EN)
2. Dropdown shows both options:
   - 🇬🇧 English
   - 🇫🇷 Français
3. User selects preferred language
4. Page content updates instantly
5. Selection saved for future visits

### Visual Indicators
- **English**: 🇬🇧 EN flag and code
- **French**: 🇫🇷 FR flag and code
- **Active language** highlighted in lime green
- **Smooth animations** on all interactions

## 🛠️ Adding New Languages

### Step 1: Create Translation File
```json
// frontend/src/i18n/locales/es.json (Spanish example)
{
  "navigation": {
    "home": "INICIO",
    "contact": "CONTACTO"
  },
  // ... additional translations
}
```

### Step 2: Update i18n Configuration
```javascript
// frontend/src/i18n/i18n.js
import translationES from './locales/es.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  es: { translation: translationES }  // Add new language
};
```

### Step 3: Update Language Switcher
```javascript
// frontend/src/components/LanguageSwitcher.js
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }  // Add new language
];
```

## ✏️ Editing Translations

### English Translations
Edit: `frontend/src/i18n/locales/en.json`
```json
{
  "hero": {
    "title": "YOUR NEW TITLE",
    "description": "Your new description"
  }
}
```

### French Translations  
Edit: `frontend/src/i18n/locales/fr.json`
```json
{
  "hero": {
    "title": "VOTRE NOUVEAU TITRE",
    "description": "Votre nouvelle description"
  }
}
```

### Component Usage
```javascript
// In React components
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  
  return <h1>{t('hero.title')}</h1>;
};
```

## 🌍 Belgian Market Considerations

### French Translations
- **Professional Business Terminology** used throughout
- **Belgian French** conventions respected
- **Formal tone** appropriate for business context
- **Cultural sensitivity** for Belgian/EU market

### Business Context
- **"Entreprise"** for company/business
- **"Conseil"** for consulting/advice
- **"Investissement"** for investment
- **"Formation"** for training/education

## 🧪 Testing Translations

### Manual Testing
1. Load website (defaults to English)
2. Click language switcher
3. Select French
4. Verify all text translates
5. Check form functionality
6. Test navigation between pages
7. Verify language persists on reload

### Translation Coverage
- [ ] Navigation menu
- [ ] Hero section
- [ ] Services descriptions
- [ ] Contact form labels
- [ ] Business hours
- [ ] Ebook content
- [ ] Footer text
- [ ] Error messages
- [ ] Success messages

## 📊 SEO & Performance

### SEO Benefits
- **Broader Audience**: English + French speakers
- **Local SEO**: Better Belgian/French market reach
- **User Experience**: Native language preference
- **Professional Image**: Demonstrates international capability

### Performance Impact
- **Minimal Bundle Size**: ~15KB additional for translations
- **Lazy Loading**: Only active language loaded
- **Cached Translations**: Stored in memory after first load
- **Fast Switching**: Instant language changes

## 🔍 Troubleshooting

### Common Issues

**1. Language Not Switching**
```javascript
// Check i18n initialization in index.js
import './i18n/i18n';
```

**2. Missing Translations**
```javascript
// Check console for missing keys
// Add missing keys to both en.json and fr.json
```

**3. Translation Not Displaying**
```javascript
// Verify useTranslation hook
const { t } = useTranslation();
return <div>{t('your.translation.key')}</div>;
```

**4. Language Switcher Not Appearing**
```javascript
// Check LanguageSwitcher import in components
import LanguageSwitcher from './LanguageSwitcher';
```

## 📞 Support

### Translation Updates
- English content updates: Modify `en.json`
- French content updates: Modify `fr.json`
- New features: Add keys to both language files

### Professional Translation Services
For additional languages or professional translation review:
- Consider hiring native speakers
- Use professional translation services
- Test with native speakers for accuracy

---

**🌐 The bilingual TC Investments website now serves both English and French-speaking clients with professional, accurate translations that maintain the premium brand experience across languages.**