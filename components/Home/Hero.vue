<template>
  <header class="hero">
    <div class="section-center hero-center">
      <article class="hero-info" v-for="item in hero" :key="item.id">
        <div class="underline"></div>
        <div v-if="!isChinese">
          <h1>{{ item.engTitle }}</h1>
          <h4>{{ item.engSubtitle }}</h4>
          <nuxt-link to="/contact" class="btn hero-btn">{{ item.engBtntext }}</nuxt-link>
        </div>
        <div v-else>
          <h1>{{ item.chnTitle }}</h1>
          <h4>{{ item.chnSubtitle }}</h4>
          <nuxt-link to="/contact" class="btn hero-btn">{{ item.chnBtntext }}</nuxt-link>
        </div>
        <ul class="social-icons hero-icons">
          <li>
            <a href="https://www.twitter.com" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" class="social-icon">
              <i class="fab fa-medium"></i>
            </a>
          </li>
        </ul>
      </article>
      <article class="hero-img">
        <img src="/images/stephenlai.jpeg" class="hero-photo" alt="john doe" />
      </article>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    hero: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // hero: []
    }
  },
  computed: {
    ...mapGetters(['isChinese'])
  },
  // async mounted(context) {
  //   // const data = await this.$axios.$get('/data.json')
  //   const data = await context.app.$axios.$get('/data.json')
  //   this.hero = data.home.hero
  // }
}
</script>

<style scoped>
</style>