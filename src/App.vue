<template>
  <div id="app">
    {{usersList}}
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState('users', ['usersList'])
  },
  created() {
    this.$store.dispatch('users/getUsers');
  }
}
</script>

<style lang="scss">

</style>
