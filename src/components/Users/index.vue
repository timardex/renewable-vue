<template>
  <div id="users">
    <Search />

    <Footer :titles="formTitles" />

    <Header :titles="formTitles" />

    <div v-if="filteredList.length">
      <Main :users="filteredList" />
      <Message :message="`Number of Users ${filteredList.length}`" align-text="right"/>
    </div>
    
    <Message v-else message="No users in the database, please add new users below." align-text="center"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'

const Header = () => import('@/components/Users/Layout/Header')
const Main = () => import('@/components/Users/Layout/Main')
const Message = () => import('@/components/Users/Helpers/Message')
const Search = () => import('@/components/Users/Helpers/Search')
const Footer = () => import('@/components/Users/Layout/Footer')

export default {
  components: {
    Header,
    Main,
    Message,
    Search,
    Footer
  },
  computed: {
    ...mapState('users', ['usersList', 'formTitles', 'searchQuery']),
    filteredList() {
      return this.usersList.filter((value) => {
        return (
          value.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          value.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          value.company.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })
    }
  },
  created() {
    this.$store.dispatch('users/getUsers')
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

#users {
  padding: 0 1rem;
}
</style>