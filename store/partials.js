let partials = { en: [], fr: [] }
let context = require.context('~/contents/partials', true, /\.md$/)

context.keys().map(key => {
  let [_, locale, slug] = key.match(/(fr|en)\/(.+)\.md$/)
  let partial = context(key)
  partial.locale = locale ? locale : 'en'
  partial.slug = slug
  partials[partial.locale] = partials[partial.locale] || []
  partials[partial.locale].push(partial)
})

export const state = () => ({})

export const getters = {
  find(state, getters, rootState) {
    return slug => {
      return partials[rootState.i18n.locale].find(
        partial => partial.slug == slug
      )
    }
  }
}
