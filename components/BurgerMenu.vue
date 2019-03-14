<template>
  <button 
    type="button"
    @click.prevent="toggle()">
    <slot/>
    <portal to="menu">
      <transition name="burger-menu">
        <div 
          v-if="visible" 
          class="bg-grey-lightest w-screen fixed h-screen overflow-x-scroll pin-y pb-16 pt-24 z-50 burger-menu">
          <slot 
            :toggle="toggle" 
            name="toggler"/>
          <div class="flex flex-col items-center justify-center w-full min-h-full overflow-x-scroll relative z-50">
            <slot 
              :toggle="toggle" 
              name="links"/>
          </div>
        </div>
      </transition>
    </portal>
  </button>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible

      document.body.classList.toggle('overflow-hidden')
    }
  }
}
</script>
