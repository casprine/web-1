<template>
  <div class="work-content">
    <div class="hero">
      <p>I work <a href="" class="link">@OmgDigital</a> as a frontend developer </p>
      <p>currently working with <span class="stack">React</span>,<span class="stack">Firebase</span> and <span class="stack">Sass</span> </p>
    </div>
    <div class="previous">
      <h1>Previous works</h1>
      <project-card v-for="(project , index) in projects" :key="index" :project="project" />
      <div class="oss">
      </div>
    </div>
  </div>
</template>


<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: "Content",
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [{
          name: 'axel',
          stack: ['js', 'typescript'],
          description: 'A tiny js lib that allows you to create unique containers per namespace in local-storage.',
          github: 'https://github.com/gwuah/axel',
          liveUrl: '',
        }]
      }
    }
  };
</script>
