<template>
  <div class="bg-grey-lightest min-h-screen flex flex-col">
    <nav class="navbar w-full z-50 pin-t transition mb-8">
      <div class="flex container items-center justify-center h-32">
        <nuxt-link 
          :to="localePath({ name: 'index' })" 
          class="font-heading font-bold antialiased mr-auto no-underline text-2xl text-grey">
          Alex <span class="text-primary">Joffroy</span>
        </nuxt-link>

        <burger-menu 
          :aria-label="$t('layout.show_menu')" 
          class="text-grey cursor-pointer sm:hidden ml-auto mr-0 no-underline">
          <span>
            <menu-icon/>
          </span>
          <button 
            slot="toggler" 
            slot-scope="{ toggle }" 
            :aria-label="$t('layout.hide_menu')"
            class="text-grey h-32 flex items-center px-4 pin-t pin-r fixed" 
            @click="toggle()">
            <close-icon/>
          </button>
          <template
            slot="links"
            slot-scope="{ toggle }">
            <nuxt-link 
              v-for="({to, caption}, key) in links" 
              :key="key"
              :to="localePath(to)" 
              active-class="text-primary"
              class="antialiased mb-4 no-underline text-4xl text-grey font-heading font-bold transition transition-all" 
              @click.native="toggle">{{ caption }}</nuxt-link>
            <div class="mt-8 flex">
              <nuxt-link
                v-for="locale in $parent.$i18n.locales"
                :key="locale.code"
                :to="locale.code == 'fr' ? '/fr' : '/'"
                :class="{ 'text-primary' : locale.code == $parent.$i18n.locale }"
                class="capitalize block antialiased mx-1 no-underline text-base text-grey text-xl font-heading font-bold transition hover:text-primary transition-all"
                @click.native="toggle">{{ locale.code }}</nuxt-link>
            </div>
          </template>
        </burger-menu>

        <nuxt-link 
          v-for="({exact, to, caption}, key) in links" 
          :exact="exact" 
          :key="key"
          :to="localePath(to)" 
          active-class="text-primary"
          class="hidden md:block antialiased mx-4 no-underline text-base text-grey font-heading font-bold transition hover:text-primary transition-all">{{ caption }}</nuxt-link>

      </div>
    </nav>
    
    <main class="container mx-auto pb-8 lg:py-16 text-grey-darker flex-1">
      <nuxt/>
    </main>

    <footer class="container pt-8 pb-16 text-grey">
      <div class="mx-auto text-center text-xs mb-8">
        {{ $t('layout.select_your_language') }}
        <nuxt-link
          v-for="locale in $parent.$i18n.locales"
          :key="locale.code"
          :to="locale.code == 'fr' ? '/fr' : '/'"
          :class="{ 'text-primary' : locale.code == $parent.$i18n.locale }"
          class="capitalize antialiased mx-1 no-underline text-grey font-heading font-bold transition hover:text-primary transition-all">{{ locale.name }}</nuxt-link>
      </div>
      <div class="content text-center text-xs">
        <p>Proudly built with <a 
          href="https://nuxtjs.org/" 
          target="_blank">NuxtJS</a> and <a 
            href="https://tailwindcss.com" 
            target="_blank">TailwindCSS</a>, hosted on <a 
              href="https://github.com/alexjoffroy" 
              target="_blank">Github</a>, and deployed on <a 
                href="https://www.netlify.com/"
                target="_blank">Netlify</a>.</p>
        <p>© 2018-{{ (new Date()).getFullYear() }} Alex Joffroy.</p>
      </div>
    </footer>

    <portal-target name="menu"/>
  </div>
</template>

<script>
import Vue from 'vue'
import PortalVue from 'portal-vue'
import BurgerMenu from '~/components/BurgerMenu'
import CloseIcon from '~/assets/svg/close.svg'
import MenuIcon from '~/assets/svg/menu.svg'

Vue.use(PortalVue)

export default {
  components: {
    BurgerMenu,
    CloseIcon,
    MenuIcon
  },
  computed: {
    availableLocales() {
      return this.$parent.$i18n.locales.filter(
        i => i.code !== this.$i18n.locale
      )
    },
    links() {
      return [
        {
          to: { name: 'blog' },
          caption: this.$t('blog.title'),
          exact: false
        },
        {
          to: { name: 'about' },
          caption: this.$t('about.title'),
          exact: true
        },
        {
          to: { name: 'contact' },
          caption: this.$t('contact.title'),
          exact: true
        }
      ]
    }
  }
}
</script>
