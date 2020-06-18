<template>
  <transition-group name="list" tag="ul" class="responsive-table">
    <li
      v-for="user in users"
      :key="user.name"
      class="table-row">
      <i class="far fa-user"></i>
      <div
        v-for="(key, name) in user"
        :key="name"
        :data-label="name"
        class="col">
        <span>{{key}}</span>
      </div>

      <Button
        @click.native="removeUser(user)"
        title="Remove User"
        color-style="red"
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
    transition: all .3s;
    border-top: 1px solid $whiteA; 
    border-bottom: 1px solid $whiteA;

    @media(max-width: $sizeSM) {
      display: block;
    }

    &:hover {
      margin-left: 1.5rem;
      background: linear-gradient(to right, $whiteA 0%,$whiteC 75%,$whiteA 100%);
    }

    &:nth-child(even) {
      border-top: 1px solid $whiteC; 
      border-bottom: 1px solid $whiteC; 
    }

    i {
      position: absolute;
      left: .5rem;
      color: $white;

      @media(max-width: $sizeSM) {
        top: .5rem;
      }
    }
  }
  .col {
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 50%;
    }

    @media(max-width: $sizeSM) {
      display: flex;
      padding: .5rem 0;

      &:before {
        content: attr(data-label);
        color: $white;
        width: 100px;
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