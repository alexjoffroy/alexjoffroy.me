import { readdirSync } from 'fs'

export default {
  hostname: 'https://alexjoffroy.me',
  generate: true,
  exclude: ['/', '/fr', '/contact/success', '/fr/contact/success'],
  routes() {
    let blogPosts = []

    readdirSync(`contents/blog-posts`).map(locale => {
      readdirSync(`contents/blog-posts/${locale}`).map(filename => {
        let [_, publishedAt, slug] = filename.match(
          /(\d{4}-\d{2}-\d{2}).(.+)\.md$/
        )

        let url =
          locale != 'en'
            ? `/${locale}/blog/${slug}-${+new Date(publishedAt) / 1000}`
            : `/blog/${slug}-${+new Date(publishedAt) / 1000}`

        blogPosts.push({
          url,
          lastmodrealtime: true,
          lastmodfile: `contents/blog-posts/${locale}/${filename}`,
          priority: 0.8
        })
      })
    })

    return [
      {
        url: `/blog`,
        lastmodrealtime: true,
        lastmodfile: `pages/blog/index.vue`,
        priority: 0.8
      },
      {
        url: `/fr/blog`,
        lastmodrealtime: true,
        lastmodfile: `pages/blog/index.vue`,
        priority: 0.8
      },
      {
        url: `/about`,
        lastmodrealtime: true,
        lastmodfile: `pages/about.vue`,
        priority: 0.8
      },
      {
        url: `/fr/a-propos`,
        lastmodrealtime: true,
        lastmodfile: `pages/about.vue`,
        priority: 0.8
      },
      {
        url: `/contact`,
        lastmodrealtime: true,
        lastmodfile: `pages/contact/index.vue`,
        priority: 0.8
      },
      {
        url: `/fr/contact`,
        lastmodrealtime: true,
        lastmodfile: `pages/contact/index.vue`,
        priority: 0.8
      }
    ].concat(blogPosts)
  }
}
