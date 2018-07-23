<template>
  <div class="header">
    <nav>
      <div class="nav-brand">
        Casprine
      </div>
      <div class="nav-items">
        <ul>
          <router-link to="/">
            <li>
              Home
            </li>
          </router-link>
          <router-link to="work">
            <li>
              Work
            </li>
          </router-link>
          <router-link to="design">
            <li>
              Design
            </li>
          </router-link>
          <a href="https://blog.casprine.xyz">
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
    components: {}
  };
</script>
