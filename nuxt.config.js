import { build, env, generate, head, i18n, meta, manifest } from './config'

module.exports = {
  mode: 'universal',

  css: ['~/assets/scss/app.scss'],

  modules: ['@nuxtjs/pwa', ['nuxt-i18n', i18n]],

  build,

  env,

  head,

  generate,

  manifest,

  meta
}
