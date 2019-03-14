<script>
export default {
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      templateRender: false
    }
  },
  created() {
    this.templateRender = new Function(this.source.vue.render)()
    this.$options.staticRenderFns = new Function(
      this.source.vue.staticRenderFns
    )()
  },
  render(h) {
    return this.templateRender ? this.templateRender() : h('div', 'Rendering')
  }
}
</script>
