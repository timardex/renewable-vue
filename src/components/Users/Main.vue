<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      <span v-for="(key, name) in user" :key="name">
        {{key}}
      </span>
      <button @click="removeUser(user)" title="Remove User"><i class="fas fa-minus-circle"></i></button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: null
    }
  },
  methods: {
    removeUser(user) {
      this.$store.dispatch('users/removeUser', user);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

ul {
  li {
    position: relative;

    span {
      margin: .2rem;
      background: $color1;
    }
  }
}
</style>