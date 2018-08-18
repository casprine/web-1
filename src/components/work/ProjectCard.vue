<template>
  <div class="project">
    <div class="project-details">
      <img :src="project.logoUrl" :alt="project.name">
      <p class="name flex"> {{project.name}}</p>
    </div>
    <div class="project-description">
      <p> {{ project.about }} </p>
    </div>
    <div class="project-stacks">
      <ul>
        <li v-for="(stack , index ) in dex" :key="index">{{ stack }}</li>
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
    computed:{ 
      dex()  {
        let data = this.project.category[0];
        var kil =  new Array();
        kil = data.split(',' , 10)
        return kil
      }
    }
  };
</script>
