let blogPosts = { en: [], fr: [] }
let context = require.context('~/contents/blog-posts', true, /\.md$/)

context.keys().map(key => {
  let [_, locale, publishedAt, slug] = key.match(
    /([a-z]{0,2})\/(\d{4}-\d{2}-\d{2}).(.+)\.md$/
  )
  let blogPost = context(key)
  blogPost.locale = locale ? locale : 'en'
  blogPost.publishedAt = new Date(publishedAt)
  blogPost.slug = `${slug}-${+blogPost.publishedAt / 1000}`
  blogPosts[blogPost.locale] = blogPosts[blogPost.locale] || []
  blogPosts[blogPost.locale].push(blogPost)
})

export const state = () => ({})

export const getters = {
  all(state, getters, rootState) {
    return blogPosts[rootState.i18n.locale].sort((a, b) => {
      return a.publishedAt > b.publishedAt ? -1 : 1
    })
  },
  find(state, getters, rootState) {
    return slug => {
      return blogPosts[rootState.i18n.locale].find(
        blogPost => blogPost.slug == slug
      )
    }
  }
}
