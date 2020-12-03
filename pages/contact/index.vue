<template>
 <h1>Contact</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      contact: []
    }
  },
  computed: {
    ...mapGetters(['isChinese', 'data'])
  },
  mounted() {
    this.contact = this.data.contact.main
  },
}
</script>

<style scoped>
</style>