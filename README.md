# Stackwerkhaus

A modern brutalist landing page for a fullstack web & app development company, built with Next.js (App Router), Tailwind CSS, and Tolgee for localization.

---

## 🚀 Overview

**Stackwerkhaus** is a showcase landing page for a fullstack web and app developer, featuring:
- **Modern brutalist design**: Bold, geometric, high-contrast, and unconventional UI.
- **Localization**: English and German, powered by [Tolgee](https://tolgee.io/).
- **Contact form**: Validated, styled, and ready for backend integration.
- **Responsive**: Looks great on all devices.
- **Tech stack**: Next.js (App Router), React, Tailwind CSS, Tolgee.

---

## 🖥️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Localization**: [Tolgee](https://tolgee.io/)
- **TypeScript**: For type safety

---

## 🌍 Localization

- All visible text is localized using Tolgee.
- Language switcher (EN/DE) in the top-right corner.
- Translation files: `src/locales/en.json`, `src/locales/de.json`

---

## 📄 Project Structure

```
src/
  app/
    layout.tsx         # App root, TolgeeProvider, language switcher
    page.tsx           # Landing page (hero + contact)
    globals.css        # Tailwind and brutalist styles
  components/
    ContactForm.tsx    # Localized, validated contact form
  locales/
    en.json            # English translations
    de.json            # German translations
```

---

## 🛠️ Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for production
```bash
npm run build
npm start
```

---

## ✨ Customization
- **Design**: Tweak Tailwind classes or add new brutalist elements in `globals.css`.
- **Localization**: Add more languages by extending `src/locales` and updating the language switcher.
- **Contact Form**: Integrate with your backend or email service as needed.
- **Animations**: Placeholder for future hero section animations.

---

## 📬 Contact
For inquiries, use the contact form on the landing page.

---

## License
[MIT](LICENSE) — © Stackwerkhaus
