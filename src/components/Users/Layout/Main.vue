<template>
  <ul class="responsive-table">
    <li
      v-for="(user, index) in users"
      :key="index"
      class="table-row">
      <span>#{{index}}</span>
      <div
        v-for="(key, name) in user"
        :key="name"
        :data-label="name"
        class="col">
        {{key}}
      </div>

      <Button
        @click.native="removeUser(user)"
        title="Remove User"
        icon="fas fa-minus-circle" />
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
.responsive-table {
  .table-row {
    border-bottom: solid 1px rgba(255,255,255,0.1);

    span {
      margin-left: -1rem;
      margin-right: .2rem;
      color: $white;
    }
  }
  .col {
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

button {
  position: absolute;
  right: .5rem; top: 0; bottom: 0;
  margin: auto;
}
</style>