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
}

#app {
  width: 100%;
  max-width: 768px;
  margin: auto;

  .text-center {
    text-align: center;
  }

  button {
    cursor: pointer;
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 50px;
    background-color: $color1;
  }
}
</style>
