export default {
  bodyAttrs: {
    class: 'antialiased font-body bg-primary'
  },
  meta: [
    {
      name: 'google-site-verification',
      content: process.env.GOOGLE_SITE_VERIFICATION_ID
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    }
  ]
}
