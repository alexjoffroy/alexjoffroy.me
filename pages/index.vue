<script>
// Redirects are already made "server-side" (see netlify.toml), but it's needed to do it client side too (for SPA mode)
export default {
  render() {
    return this.$router.replace(this.localePath({ name: 'blog' }))
  }
}
</script>
