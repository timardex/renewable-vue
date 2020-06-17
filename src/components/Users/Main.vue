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