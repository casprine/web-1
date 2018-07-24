<template>
  <div class="home">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from "@/components/nav/Header";
  import Content from "@/components/Content";
  import Footer from "@/components/nav/Footer";
  
  export default {
    name: "home",
    components: {
      Header,
      Content,
      Footer
    }
  };
</script>
