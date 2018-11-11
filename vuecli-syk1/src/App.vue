<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/yujingxiacai">Yujingxiacai</router-link> |
      <router-link :to="{name:'test1',params:{name:'syk',hobby:'lol'}}">Yujingxiacai-1a</router-link> |
      <router-link to="/yujingxiacai/test2">Yujingxiacai-2a</router-link>
    </div>
    <transition name="yud">
      <router-view/>
    </transition>
   
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// .yud-enter {
//  transform: translateX(100%);
// }
// .yud-enter-active {
//  transition: transform 1s ease;
// }
// .yud-enter-to {
// transform: translateX(0);
// }
.yud-leave {
 transform: translateX(0);
}
.yud-leave-active {
 transition: transform 1s ease;
}
.yud-lleave-to {
transform: translateX(-100%);
}
</style>
