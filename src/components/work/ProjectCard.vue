<template>
  <div class="project">
    <div class="project-details">
      <img :src="project.img" :alt="project.name">
      <p class="name flex"> {{project.name}}</p>
    </div>
  
    <div class="project-description">
      <p> {{ project.description }} </p>
    </div>
    <div class="project-stacks">
      <ul>
        <li v-for="(stack , index ) in project.stacks" :key="index">{{ stack}}</li>
      </ul>
    </div>
  </div>
</template>




<script>
  export default {
    name: "ProjectCard",
    props: {
      project: Object
    },
    data() {
      return {
        return: {}
      };
    },
    computed: {
      stack() {
        return this.project.stack.join(',')
      }
    }
  }
</script>

