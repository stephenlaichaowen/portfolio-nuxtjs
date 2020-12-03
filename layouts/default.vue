<template>
  <div>
    <Navbar @sidenavToggle="displaySidenav = !displaySidenav" />
    <Sidebar :open="displaySidenav" @close="displaySidenav = false" />
    <nuxt class="center" />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Portfolio | Stephen Lai'
    }
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 278px);
  /* padding: 5rem; */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

li a:hover,
li a:active,
li a.nuxt-link-exact-active {
  color: var(--clr-primary-5);
}

.fa-language {
  cursor: pointer;
}
</style>
