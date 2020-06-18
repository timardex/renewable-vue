<template>
  <div id="users">
    <Header :titles="formTitles" />

    <Main v-if="usersList.length" :users="usersList" />
    
    <ErrorMsg v-else message="No users in the database, please add new users below."/>
    
    <Footer :titles="formTitles" />
  </div>
</template>

<script>
import {mapState} from 'vuex'

const Header = () => import('@/components/Users/Layout/Header')
const Main = () => import('@/components/Users/Layout/Main')
const ErrorMsg = () => import('@/components/Users/Helpers/ErrorMsg')
const Footer = () => import('@/components/Users/Layout/Footer')

export default {
  components: {
    Header,
    Main,
    ErrorMsg,
    Footer
  },
  computed: {
    ...mapState('users', ['usersList', 'formTitles'])
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

.responsive-table {
  padding: 0;
  margin: 0;

  li {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media(max-width: $sizeSM) {
      display: block;
    }
  }
  .table-header {
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: 0.03rem;
    background-color: rgba(255,255,255,0.3);
    color: $white;
    font-weight: 700;

    span {
      cursor: pointer;
    }

    @media(max-width: $sizeSM) {
      display: none;
    }
  }
  .table-row {
    border-bottom: solid 1px rgba(255,255,255,0.1);
  }
  .col {
    width: 100%;

    @media(max-width: $sizeSM) {
      display: flex;
      padding: .5rem 0;

      &:before {
        content: attr(data-label);
        color: $white;
        width: 100px;
        padding-right: 1rem;
        text-align: left;
        text-transform: capitalize;
      }
    }
  }
}
</style>