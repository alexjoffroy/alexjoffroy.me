const path = require('path')

export default {
  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }

    config.module.rules.push({
      test: /\.md$/,
      include: path.resolve(process.cwd(), 'contents'),
      loader: 'frontmatter-markdown-loader',
      options: {
        vue: {
          root: 'content'
        }
      }
    })

    config.module.rules.find(
      rule => ('' + rule.test).indexOf('(png|jpe?g|gif|svg|webp)') > -1
    ).test = /\.(png|jpe?g|gif|webp)$/

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'vue-svg-loader'
    })
  },
  vendor: ['headroom.js', 'noty']
}
