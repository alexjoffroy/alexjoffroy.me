export default {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
    { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.js' }
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'translations/',
  parsePages: false,
  pages: {
    about: {
      en: '/about',
      fr: '/a-propos'
    }
  }
}
