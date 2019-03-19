const fs = require('fs')

export default {
  subFolders: true,
  routes() {
    let routes = ['/', '/blog', '/contact', '/contact/success']

    fs.readdirSync(`contents/blog-posts`).map(locale => {
      fs.readdirSync(`contents/blog-posts/${locale}`).map(filename => {
        let [_, publishedAt, slug] = filename.match(
          /(\d{4}-\d{2}-\d{2}).(.+)\.md$/
        )

        routes.push({
          route:
            locale != 'en'
              ? `/${locale}/blog/${slug}-${+new Date(publishedAt) / 1000}`
              : `/blog/${slug}-${+new Date(publishedAt) / 1000}`
        })
      })
    })

    return routes
  }
}
