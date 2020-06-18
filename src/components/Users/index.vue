<template>
  <div id="users">
    <Header :titles="formTitles" />

    <Main v-if="filteredList.length" :users="filteredList" />
    
    <Message v-else message="No users in the database, please add new users below." align-text="center"/>

    <Search />
    
    <Footer :titles="formTitles" />

    <Message :message="`Number of Users ${filteredList.length}`" align-text="right"/>
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

  .responsive-table {
    padding: 0;

    li {
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      position: relative;

      @media(max-width: $sizeSM) {
        display: block;
      }
    }

    .col {
      width: 100%;
    }
  }
}
</style>