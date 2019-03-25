<template>
  <div>
    <h1 class="text-3xl text-grey-darkest font-bold font-heading mb-16">{{ $t('about.title') }}</h1>
    <div class="flex flex-wrap">
      <render-front-matter :source="partial"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RenderFrontMatter from '~/components/RenderFrontMatter'
import GetHeadMixin from '~/mixins/GetHeadMixin'

export default {
  components: {
    RenderFrontMatter
  },
  mixins: [GetHeadMixin],
  head() {
    return this.getHead({
      title: this.$t('about.seo_title'),
      description: this.$t('about.seo_description')
    })
  },
  asyncData({ error, store }) {
    let partial = store.getters['partials/find']('about')

    if (!partial) {
      error(404)
    }

    return { partial }
  }
}
</script>
