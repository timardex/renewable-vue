<template>
  <ul>
    <li v-for="(user, index) in users" :key="index" class="title">
      <span v-for="(key, name) in user" :key="name">
        {{name}}
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
  margin: 0;
  li {
    span {
      text-align: center;
      text-transform: capitalize;
    }
  }
}
</style>