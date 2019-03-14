<script>
const Noty = process.browser ? require('noty') : false

export default {
  props: {
    text: { type: String, required: true },
    type: { type: String, default: 'default' },
    timeout: { type: Number, default: 0 }
  },

  render(createElement) {
    if (Noty) {
      new Noty({
        progressBar: true,
        text: this.text,
        timeout: this.timeout,
        type: this.type
      }).show()
    }

    return createElement('noscript')
  }
}
</script>
