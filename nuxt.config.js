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

import { colors } from './tailwind.js'

module.exports = {
  mode: 'universal',

  css: ['~/assets/scss/app.scss'],

  modules: [
    ['nuxt-i18n', i18n],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-purgecss'
  ],

  plugins: ['plugins/portal-vue', 'plugins/webfonts.client'],

  loading: {
    color: colors.primary,
    height: '.25rem'
  },

  build,

  env,

  head,

  generate,

  manifest,

  meta,

  purgeCSS,

  sitemap
}
