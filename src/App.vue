<template>
  <div id="app">
    <Users />
  </div>
</template>

<script>
const Users = () => import('@/components/Users')
export default {
  components: {
    Users
  }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';
body {
  margin: 0;
  font-family: $font1;
  background: linear-gradient(to right, #25c481, #25b7c4);
}

#app {
  width: 100%;
  max-width: 992px;
  margin: auto;

  .text-center {
    text-align: center;
  }
}
</style>
