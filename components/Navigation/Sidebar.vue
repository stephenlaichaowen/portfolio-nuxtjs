<template>
  <aside class="sidebar" id="sidebar" :class="{ 'show-sidebar': open  }">
    <div>
      <button class="close-btn" id="close-btn" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <ul class="sidebar-links">
        <li v-for="item in menu" :key="item.id" @click="$emit('close')">
          <nuxt-link v-if="!isChinese" :to="`${item.url}`">{{ item.engTitle }}</nuxt-link>
          <nuxt-link v-else :to="`${item.url}`">{{ item.chnTitle }}</nuxt-link>
        </li>
      </ul>
      <ul class="social-icons">
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
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
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
  }
}
</script>

<style scoped>
</style>