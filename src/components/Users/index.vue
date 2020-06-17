<template>
  <div id="users">
    <div class="list">
      <Header :users="usersList.slice(0,1)"/>
      <Main :users="usersList"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
const Header = () => import('@/components/Users/Header')
const Main = () => import('@/components/Users/Main')

export default {
  components: {
    Header,
    Main
  },
  computed: {
    ...mapState('users', ['usersList'])
  },
}
</script>

<style lang="scss">
#users {
  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      width: 100%;

      span {
        width: 100%;
      }
    }
  }
}
</style>