import {
  build,
  env,
  generate,
  head,
  i18n,
  meta,
  manifest,
  purgeCSS,
  sitemap
} from './config'

module.exports = {
  mode: 'universal',

  css: ['~/assets/scss/app.scss'],

  modules: [
    ['nuxt-i18n', i18n],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-purgecss'
  ],

  plugins: ['plugins/webfonts.client'],

  build,

  env,

  head,

  generate,

  manifest,

  meta,

  purgeCSS,

  sitemap
}
