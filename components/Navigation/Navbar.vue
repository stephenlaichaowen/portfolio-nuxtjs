<template>
  <div>
    <nav class="nav" id="nav" ref="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src="/images/logo.svg" class="nav-logo" alt="nav logo" />
          <button class="nav-btn" id="nav-btn" @click="$emit('sidenavToggle')">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <ul class="nav-links">
          <li v-for="item in menu" :key="item.id">
            <nuxt-link v-if="!isChinese" :to="`${item.url}`">{{ item.engTitle }}</nuxt-link>
            <nuxt-link v-else :to="`${item.url}`">{{ item.chnTitle }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      menu: []
    }
  },
  computed: {
    ...mapGetters(['isChinese'])
  },
  methods: {
    ...mapActions(['toggleLang'])
  },
  async mounted() {
    const data = await this.$axios.$get('/menu.json')
    this.menu = data

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        this.$refs.navbar.classList.add('navbar-fixed')
      } else {
        this.$refs.navbar.classList.remove('navbar-fixed')
      }
    })
    console.log(`chinese: ${this.isChinese}`)
  }
}
</script>

<style scoped>
.nav-header {
  
}

.logo {
  /* line-height: 80px; */
  /* line-height: 1.2rem; */
  /* margin-top: 0.5rem; */
  /* margin-left: rem; */
  font-size: 30px;
  font-weight: bold;
  /* transform: translate(12rem, 0.5rem); */
  text-shadow: 2px 2px 4px #aaa;
  color: #000;
  justify-self: end;
}

.last-name {
  color: var(--clr-primary-5);
}
</style>

