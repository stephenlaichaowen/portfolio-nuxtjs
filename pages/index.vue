<template>
  <h1>Home</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['data']),
  },
}
</script>

<style scoped>
</style>