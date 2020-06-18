<template>
  <div id="users">
    <Header />
    <Main v-if="usersList.length" :users="usersList"/>
    <p v-else class="text-center">No users in the database, please add new users below.</p>
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
    background-color: $color2;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.03rem;

    @media(max-width: $sizeSM) {
      display: none;
    }
  }
  .table-row {
    background-color: $color1;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  .col {
    width: 100%;

    @media(max-width: $sizeSM) {
      display: flex;
      padding: .5rem 0;

      &:before {
        content: attr(data-label);
        color: #6C7A89;
        width: 100px;
        padding-right: 1rem;
        text-align: left;
        text-transform: capitalize;
      }
    }
  }
}
</style>