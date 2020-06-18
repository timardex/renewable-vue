<template>
  <div id="users">
    <Message tag="h4" message="Search User" align-text="left"/>
    <Search />

    <Message tag="h4" message="Add new User" align-text="left"/>
    <AddUser :titles="formTitles" />

    <Message tag="h4" message="Users List, sort by clicking on titles" align-text="left"/>
    <UserHeader :titles="formTitles" />

    <div v-if="filteredList.length">
      <ListUser :users="filteredList" />
      <Message
        tag="p"
        :message="`Number of Users ${filteredList.length}`"
        align-text="right"/>
    </div>
    
    <Message
      v-else
      tag="p"
      message="No users in the database, please add new users."
      align-text="center"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'

const UserHeader = () => import('@/components/Users/Layout/UserHeader')
const ListUser = () => import('@/components/Users/Layout/ListUser')
const Message = () => import('@/components/Users/Helpers/Message')
const Search = () => import('@/components/Users/Helpers/Search')
const AddUser = () => import('@/components/Users/Layout/AddUser')

export default {
  components: {
    UserHeader,
    ListUser,
    Message,
    Search,
    AddUser
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