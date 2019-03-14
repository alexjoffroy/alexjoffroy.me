export default {
  methods: {
    getHead({ title, description, image }) {
      return {
        title: title,
        meta: [
          { hid: 'description', name: 'description', content: description },
          {
            hid: 'url',
            name: 'url',
            content: process.env.baseUrl + this.$route.path
          },
          { hid: 'og:title', property: 'og:title', content: title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: process.env.baseUrl + this.$route.path
          },
          { hid: 'og:image', property: 'og:image', content: image },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: image
          }
        ]
      }
    }
  }
}
