<template>
  <transition-group name="list" tag="ul" class="responsive-table">
    <li
      v-for="user in users"
      :key="user"
      class="table-row">
      <span><i class="far fa-user"></i></span>
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
  </transition-group>
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
    background: transparent;

    &:nth-child(even) {
      background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 75%,rgba(255,255,255,0) 100%);
    }

    span {
      position: absolute;
      left: 0;
      color: $white;
      opacity: .5;
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