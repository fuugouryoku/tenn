<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
@font-face
{
font-family: myLogoFont;
src: url('./assets/font/logo.ttf');
   /* IE9+,可以是具体的实际链接 */
}
</style>
