import { build, env, generate, head, i18n } from './config'

module.exports = {
  mode: 'universal',

  css: ['~/assets/scss/app.scss'],

  modules: [['nuxt-i18n', i18n]],

  env,

  head,

  generate,

  build
}
