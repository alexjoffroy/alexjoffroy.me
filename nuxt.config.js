import {
  build,
  env,
  generate,
  head,
  i18n,
  meta,
  manifest,
  sitemap
} from './config'

module.exports = {
  mode: 'universal',

  css: ['~/assets/scss/app.scss'],

  modules: [['nuxt-i18n', i18n], '@nuxtjs/pwa', '@nuxtjs/sitemap'],

  build,

  env,

  head,

  generate,

  manifest,

  meta,

  sitemap
}
