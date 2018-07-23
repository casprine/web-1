<template>
  <div class="home">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";


export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
