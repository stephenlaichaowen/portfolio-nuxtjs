<template>
  <section class="section projects">
    <!-- section title -->
    <div class="section-title">
      <h2>latest works</h2>
      <div class="underline"></div>
      <p class="projects-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
        magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
        dignissimos aliquid blanditiis architecto voluptates delectus
        voluptate animi nulla! Autem explicabo perspiciatis officia ea.
      </p>
    </div>
    <!--end of section title -->
    <div class="section-center projects-center">
      <!-- single project -->
      <!-- <a href="projects.html" class="project-1"> -->
      <nuxt-link to="/projects/1" class="project-1">
        <article class="project">
          <img src="/images/project-1.jpeg" alt="single project" class="project-img" />
          <div class="project-info">
            <h4>project title</h4>
            <p>client name</p>
          </div>
        </article>
      </nuxt-link>
      <!-- end of single project -->
      <!-- single project -->
      <!-- <a href="projects.html" class="project-2"> -->
      <nuxt-link to="/projects/2" class="project-2">
        <article class="project">
          <img src="/images/project-2.jpeg" alt="single project" class="project-img" />
          <div class="project-info">
            <h4>project title</h4>
            <p>client name</p>
          </div>
        </article>
      </nuxt-link>

      <!-- end of single project -->
      <!-- single project -->
      <nuxt-link to="/projects/3" class="project-3">
        <article class="project">
          <img src="/images/project-3.jpeg" alt="single project" class="project-img" />
          <div class="project-info">
            <h4>project title</h4>
            <p>client name</p>
          </div>
        </article>
      </nuxt-link>
      <!-- end of single project -->
      <!-- single project -->
      <!-- <a href="projects.html" class="project-4"> -->
        <nuxt-link to="/projects/4" class="project-4">
        <article class="project">
          <img src="/images/project-4.jpeg" alt="single project" class="project-img" />
          <div class="project-info">
            <h4>project title</h4>
            <p>client name</p>
          </div>
        </article>
        </nuxt-link>
      <!-- end of single project -->
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
</style>