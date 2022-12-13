<style>
/* Reset CSS  */
* { margin:0; padding:0; border:0; outline:0; vertical-align:top;
    -webkit-text-size-adjust:none;  }
    html{font-family:'돋움'; font-size:16px; color:#333;}
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display:block; }
    ul, ol, dl { list-style:none; }
    img, video {border:0; vertical-align:top; }
    a, a:link {color:#333;text-decoration:none; display: block; }
    a:visited { color:#333; }
    a:active {color:#333;text-decoration:none; }
    table { border-collapse:collapse; border-spacing:0; }
    input, select { vertical-align:middle; }
    label { cursor:pointer; }
    .blind,legend,hr,caption { display:block; overflow:hidden; position:absolute; top:0; left:-1000em; }
    em,address { font-style:normal; font-weight:normal; }
    p,li,dd{ line-height:1.5em}
    .hidden, #skipNav{display: block; position: absolute; left:-1000%; top:0; width: 1px; height: 1px;
        overflow: hidden; color: #333;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<template>
  <div id="app">
    <HeaderArea />

    <!-- router-view == 실제 main, sub page들 content, headerArea 의 nav 로 content만 교체 -->
    
    <router-view></router-view>

    <FooterArea />
  </div>

</template>

<style>

</style>

<script>
 import HeaderArea from './components/HeaderArea'
 import FooterArea from './components/FooterArea'
 import seouljson from './seoul.json'

 export default {
  name : 'app',
  components:{
       HeaderArea,
       FooterArea,
  },
  
  data(){
    return{
      seouldata : seouljson
    }
  },
  methods: {

  }
  }
</script>
