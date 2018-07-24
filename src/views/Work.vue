<template>
  <div class="works">
     <Header/>
     <Content/>
    <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/nav/Header";
import Content from "@/components/work/Content";
import Footer from "@/components/nav/Footer";

export default {
  name: "work",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>
