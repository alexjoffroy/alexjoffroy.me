<template>
  <div>    
    <h1 class="text-3xl text-grey-darkest font-bold font-heading mb-16">{{ $t('contact.title') }}</h1>
    <form 
      :action="localePath({ name: 'contact-success' })"
      class="mb-8"
      name="contact" 
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true">
        
      <input 
        type="hidden" 
        name="form-name" 
        value="contact">
        
      <form-field
        :required="true"
        :label="$t('contact.email')"
        :placeholder="$t('contact.email_placeholder')"
        class="mb-8 md:w-1/2 lg-1/3"
        name="email"
        type="email" />

      <form-field
        :required="true"
        :label="$t('contact.subject')"
        :placeholder="$t('contact.subject_placeholder')"
        class="mb-8 md:w-1/2"
        name="subject" />

      <form-field
        :required="true"
        :label="$t('contact.content')"
        :placeholder="$t('contact.content_placeholder')"
        class="mb-8"
        name="content"
        type="textarea" />               

      <div 
        :data-sitekey="recaptchaKey" 
        class="g-recaptcha mb-8"/>

      <button 
        class="button is-black has-arrow mx-auto" 
        type="submit">{{ $t('contact.send') }}</button>

    </form>
  </div>
</template>

<script>
import FormField from '~/components/FormField'
import GetHeadMixin from '~/mixins/GetHeadMixin'

export default {
  components: {
    FormField
  },
  mixins: [GetHeadMixin],
  computed: {
    recaptchaKey() {
      return process.env.recaptcha.key
    }
  },
  head() {
    let head = this.getHead({
      description: this.$t('contact.seo_title'),
      title: this.$t('contact.seo_title')
    })

    head['script'] = [
      {
        src: 'https://www.google.com/recaptcha/api.js'
      }
    ]

    return head
  }
}
</script>
