<template>
  <div id="app">
    {{users}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('form', ['users'])
  }
}
</script>

<style lang="scss">

</style>
