<template>
  <div class="footer mb-only">
    <div class="footer-nav">
      <router-link to="/">
        <div class="footer-nav-item">
          <span> 🔥 </span>
          <span>Home </span>
        </div>
      </router-link>
      <router-link to="work">
        <div class="footer-nav-item">
          <span>👨‍💻 </span>
          <span>Work </span>
        </div>
      </router-link>
      <!-- <router-link to="design">
        <div class="footer-nav-item">
          <span> 🎨 </span>
          <span> Design</span>
        </div>
      </router-link> -->
      <a href="https://blog.casprine.xyz" class="footer-nav-item">
        <span>📝</span>
        <span>  Journal </span>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Footer",
  components: {}
};
</script>
