<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      <span v-for="(key, name) in user" :key="name">
        {{key}}
      </span>
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

ul {
  li {
    span {
      margin: .2rem;
      background: $color1;
    }
  }
}
</style>