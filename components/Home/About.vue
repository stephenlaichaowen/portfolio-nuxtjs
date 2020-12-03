<template>
   <section class="section about">
      <div class="section-center about-center">
        <article class="about-img">
          <img
            src="/images/stephenlai.jpeg"
            class="hero-photo"
            alt="about img"
          />
        </article>
        <article class="about-info" v-for="item in about" :key="item.id">
          <div class="section-title about-title">
            <h2 v-if="!isChinese">{{ item.engTitle }}</h2>
            <h2 v-else>{{ item.chnTitle }}</h2>
            <div class="underline"></div>
          </div>
          <p v-if="!isChinese">{{ item.engContent_1 }}</p>
          <p v-else>{{ item.chnContent_1 }}</p>
          <p v-if="!isChinese">{{ item.engContent_2 }}</p>
          <p v-else>{{ item.chnContent_2 }}</p>
          <nuxt-link v-if="!isChinese" to="/about" class="btn">{{ item.engBtntext }}</nuxt-link>
          <nuxt-link v-else to="/about" class="btn">{{ item.chnBtntext }}</nuxt-link>
        </article>
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    about: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isChinese'])
  }
}
</script>

<style scoped>

</style>