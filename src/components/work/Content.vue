<template>
<div class="work-content">
<div class="hero">
  <p>I work  <a href="" class="link">@OmgDigital</a> as a frontend developer  </p>
<p>currently working with <span class="stack">React</span>,<span class="stack">Firebase</span> and <span class="stack">Sass</span>   </p>
</div>
<div class="previous">
<h1>Previous works</h1>
<Project/>

<div class="oss">
</div>
</div>
</div>
</template>


<script>
import Project from "./Project";
export default {
  name: "Content",
  components: {
    Project
  }
};
</script>
