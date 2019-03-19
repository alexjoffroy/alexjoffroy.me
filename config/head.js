export default {
  htmlAttrs: {
    lang: 'fr'
  },
  bodyAttrs: {
    class: 'font-body bg-primary'
  },
  title: 'AlexJoffroy.me',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'AlexJoffroy.me'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    { hid: 'twitter:site', name: 'twitter:site', content: '@AlexJoffroy' },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@AlexJoffroy'
    },
    {
      hid: 'msapplication-TileColor',
      name: 'msapplication-TileColor',
      content: '#da532c'
    },
    { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'mask-icon', color: '#5bbad5', href: '//safari-pinned-tab.svg' },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Quicksand:300,400,700|Source:300,400,700'
    }
  ]
}
