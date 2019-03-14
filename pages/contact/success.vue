<template>
  <div>
    <no-ssr>
      <noty-box 
        :text="$t('contact.your_message_has_been_sent')" 
        type="success" 
        timeout="8000"/>
    </no-ssr>
  </div>
</template>

<script>
import NotyBox from '~/components/NotyBox'

export default {
  components: {
    NotyBox
  },
  mounted() {
    this.$router.replace(this.localePath({ name: 'contact' }))
  }
}
</script>
