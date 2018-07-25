<template>
      <div class="project">
  <div class="project-details">
    <img src={{ project.imgLink }} alt={{ project.name}}> 
    <p class="name flex"> {{project.name}}</p>
  </div>
  <div class="project-position">
    <p> {{ project.position}} </p>
  </div>
  <div class="project-description">
   <p> {{ project.description }} </p>
  </div>
  <div class="project-stacks">
    <span class="stack"> React </span>
    <span class="stack"> React </span>
    <span class="stack"> React </span>
    <span class="stack"> React </span>
  </div>
</div>
</template>

<script>
    export default {
        name: "Project",
        props: ["project" , "index"],
        data(){
          return{};
        }
    }
</script>