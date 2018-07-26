<template>
      <div class="project">
  <div class="project-details">
    <img :src="project.imgLink" :alt="project.name">
    <p class="name flex"> {{project.name}}</p>
  </div>
  <div class="project-position">
    <p> {{ project.position}} </p>
  </div>
  <div class="project-description">
   <p> {{ project.description }} </p>
  </div>
  <div class="project-stacks" id="stack">
 span.
  </div>
</div>
</template>

<script>
import axios from "axios";
    export default {
        name: "Project",
        props: ["project" , "index"],
        data(){
          return{
            project:null
          };
        },
        beforeMount() {
          let url = "https://api.myjson.com/bins/kk0de";
          axios.get(url)
          .then(response => (this.project = response.data))
          .catch(error => console.log(error));
        },
          }

</script>