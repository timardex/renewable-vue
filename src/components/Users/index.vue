<template>
  <div id="users">
    <Header />

    <Main v-if="usersList.length" :users="usersList"/>

    <p v-else class="text-center">No users in database, please add new users below.</p>

    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'

const Header = () => import('@/components/Users/Header')
const Main = () => import('@/components/Users/Main')
const Footer = () => import('@/components/Users/Footer')

export default {
  components: {
    Header,
    Main,
    Footer
  },
  computed: {
    ...mapState('users', ['usersList', 'formTitles'])
  },
  created() {
    this.$store.dispatch('users/getUsers');
  }
}
</script>

<style lang="scss">
#users {
  overflow: auto;
  white-space: nowrap;
  padding: 0 1rem;

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      width: 100%;

      span {
        padding: .5rem 1rem;
        width: 100%;
        min-width: 120px;
      }
    }
  }
}
</style>