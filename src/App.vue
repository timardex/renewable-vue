<template>
  <div id="app">
    <Users />
  </div>
</template>

<script>
const Users = () => import('@/components/Users')
export default {
  name: 'App',
  components: {
    Users
  },
  created() {
    this.$store.dispatch('users/getUsers');
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  width: 100%;
  max-width: 768px;
  margin: auto;
}
</style>
