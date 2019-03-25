<template>
  <div>
    <h1 class="text-3xl text-grey-darker font-bold font-heading mb-16">{{ $t('blog.title') }}</h1>
    <ul class="list-reset">
      <li 
        v-for="(blogPost, key) in blogPosts" 
        :key="key" 
        class="mb-8">
        <post-preview 
          :title="blogPost.attributes.title"
          :subtitle="$t('blog.posted_on', {
            date: blogPost.publishedAt.toLocaleDateString($i18n.locale, { year: 'numeric', month: 'long', day: 'numeric' })
          })"
          :route="localePath({ name: 'blog-slug', params: {slug: blogPost.slug}})">
          <p v-html="blogPost.attributes.excerpt"/>
        </post-preview>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostPreview from '~/components/PostPreview'
import GetHeadMixin from '~/mixins/GetHeadMixin'

export default {
  components: {
    PostPreview
  },
  mixins: [GetHeadMixin],
  head() {
    return this.getHead({
      description: this.$t('blog.seo_title'),
      title: this.$t('blog.seo_title')
    })
  },
  computed: {
    ...mapGetters({
      blogPosts: 'blogPosts/all'
    })
  }
}
</script>
