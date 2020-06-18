<template>
  <ul class="responsive-table">
    <li v-for="(user, index) in users" :key="index" class="table-row">
      <div v-for="(key, name) in user" :key="name" :data-label="name" class="col">
        {{key}}
      </div>
      <Button @click.native="removeUser(user)" title="Remove User" icon="fas fa-minus-circle" />
    </li>
  </ul>
</template>

<script>
const Button = () => import('@/components/Users//Helpers/Button')

export default {
  components: {
    Button
  },
  props: {
    users: {
      type: Array,
      default: null
    }
  },
  methods: {
    removeUser(user) {
      this.$store.dispatch('users/removeUser', user)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
button {
  position: absolute;
  right: .5rem; top: 0; bottom: 0;
  margin: auto;
}
</style>