import { Tolgee, DevTools, TolgeeProvider, FormatSimple } from "@tolgee/react";

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'de', // default to German as per previous request
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL || 'https://app.tolgee.io',
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    staticData: {
      en: () => import('../locales/en.json').then((m) => m.default),
      de: () => import('../locales/de.json').then((m) => m.default),
    },
  });

export { TolgeeProvider, tolgee }; 