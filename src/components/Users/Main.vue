<template>
  <ul class="responsive-table">
    <li v-for="(user, index) in users" :key="index" class="table-row">
      <div v-for="(key, name) in user" :key="name" :data-label="name" class="col">
        {{key}}
      </div>
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
button {
  position: absolute;
  right: .5rem; top: 0; bottom: 0;
  margin: auto;
}
</style>