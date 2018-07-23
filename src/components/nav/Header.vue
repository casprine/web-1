<template>
  <div class="header">
    <nav>
      <div class="nav-brand">
        <img src="../../assets/logo.svg" alt="" srcset="">
      </div>
      <div class="nav-items">
        <ul>
          <router-link to="/" class="nav-item">
            <li>
              Home
            </li>
          </router-link>
          <router-link to="work" class="nav-item">
            <li>
              Work
            </li>
          </router-link>
          <router-link to="design" class="nav-item">
            <li>
              Design
            </li>
          </router-link>
          <a href="https://blog.casprine.xyz" class="nav-item">
            <li>
              Blog
            </li>
          </a>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "Header",
    components: {},
  };
</script>
