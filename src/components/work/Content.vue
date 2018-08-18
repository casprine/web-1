<template>
  <div class="work-content">
    <div class="hero">
      <p class="sans">I work <a href="https://omgdigitalinc.com/" class="link">@OmgDigital</a> as a frontend developer </p>
      <p class="sans">currently working with
        <span class="stack avenir">React</span>,<span class="stack">Firebase</span> and <span class="stack">Sass</span> </p>
    </div>
    <div class="previous">
      <h1 class="avenir">Previous works <span> 🏣</span> </h1>
      <div class="projects">
        <project-card v-for="(project , index) in projects" :key="index" :project="project" />
      </div>
      <div class="oss">
      </div>
    </div>
  </div>
</template>


<script>
import ProjectCard from "./ProjectCard";
import axios from "axios";
export default {
  name: "Content",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: null
    };
  },
  beforeMount() {
    let url = `https://casprinne.herokuapp.com/projects`;

    axios
      .get(url)
      .then(response => (this.projects = response.data))
      // .then(response => {
      //   console.log(response)
      // })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
