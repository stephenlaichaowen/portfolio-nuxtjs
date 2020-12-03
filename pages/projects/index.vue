<template>
  <h1>Projects</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      projects: []
    }
  },
  computed: {
    ...mapGetters(['isChinese', 'data'])
  },
  mounted() {
    this.projects = this.data.projects.main
  }
}
</script>

<style scoped>
</style>