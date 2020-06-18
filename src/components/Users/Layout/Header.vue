<template>
  <ul class="responsive-table">
    <li
      v-for="(title, index) in titles"
      :key="index"
      class="table-header">

      <div
        v-for="(key, name) in title"
        :key="name"
        class="col">
        <span @click="sortBy(name)">
          {{name}}
          <i :class="`fas fa-chevron-${order ? 'up' : 'down'}`"></i>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    order: false
  }),
  methods: {
    sortBy(el) {
      this.order = !this.order;
      const payload = {
        order: this.order, sort: el
      }
      this.$store.dispatch('users/sortBy', payload);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
.responsive-table {

  @media(max-width: $sizeSM) {
      display: none;
  }

  .table-header {
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: 0.03rem;
    background-color: rgba(255,255,255,0.2);
    color: $white;
    font-weight: 700;

    span {
      cursor: pointer;

      &:hover {
        .fas {
          display: inline-block;
        }
      }

      .fas {
        display: none;
      }
    }
  }
}
</style>