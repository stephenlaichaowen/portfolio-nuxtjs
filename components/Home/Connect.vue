<template>
  <section class="connect">
    <video controls autoplay muted loop class="video-container" poster="/images/project-1.jpeg">
      <source src="/videos/connect.mp4" type="video/mp4" />Sorry, your browser does not support embedded videos
    </video>
    <div class="video-banner">
      <!-- section title -->
      <div class="section-title">
        <h2>let's get in touch</h2>
        <div class="underline"></div>
      </div>
      <!--end of section title -->
      <p class="video-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
        perferendis exercitationem sit. Beatae eius commodi officiis rem
        soluta ratione dignissimos quisquam tempore laudantium, porro vitae
        cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
        repellendus delectus nostrum veniam!
      </p>
      <!-- <a href="contact.html" class="btn">contact me</a> -->
      <nuxt-link to="contact" class="btn">contact me</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
</style>