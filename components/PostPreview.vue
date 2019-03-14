<template>
  <article class="flex flex-col justify-between">
    <nuxt-link
      slot="link"
      :to="route" 
      class="no-underline font-heading font-bold text-xl text-grey-darker hover:text-primary transition-all">
      {{ title }}
    </nuxt-link>
    <small 
      v-if="subtitle" 
      class="block my-4 w-full text-sm text-grey">{{ subtitle }}</small>
  </article>
</template>

<script>
export default {
  props: {
    route: {
      type: Object | String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
