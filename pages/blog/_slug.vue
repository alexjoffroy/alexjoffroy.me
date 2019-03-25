<template>
  <div v-if="blogPost">
    <h1 class="text-3xl text-grey-darker font-bold font-heading">{{ blogPost.attributes.title }}</h1>
    <small class="block mt-4 mb-16 w-full text-base text-grey-dark">
      {{ $t('blog.posted_on', {
        date: blogPost.publishedAt.toLocaleDateString($i18n.locale, { year: 'numeric', month: 'long', day: 'numeric' })
      }) }}
    </small> 
    <render-front-matter :source="blogPost"/>
  </div>
</template>

<script>
import RenderFrontMatter from '~/components/RenderFrontMatter'
import GetHeadMixin from '~/mixins/GetHeadMixin'

export default {
  components: {
    RenderFrontMatter
  },
  head() {
    return this.getHead({
      title: this.blogPost.attributes.seo_title,
      description: this.blogPost.attributes.seo_description
    })
  },
  mixins: [GetHeadMixin],
  asyncData({ params, error, store }) {
    let blogPost = store.getters['blogPosts/find'](params.slug)

    if (!blogPost) {
      error(404)
    }

    return { blogPost }
  }
}
</script>
