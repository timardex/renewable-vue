<template>
  <div class="user-header">
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
  </div>
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
.user-header {
  background-color: $whiteB;
}
.responsive-table {
  margin: 0;
  overflow: auto;
  white-space: nowrap;
  

  @media(max-width: $sizeSM) {
    text-align: center;
  }

  .table-header {
    text-transform: capitalize;
    letter-spacing: 0.03rem;
    color: $white;
    
    span {
      cursor: pointer;
      position: relative;

      &:hover {
        .fas {
          display: inline-block;
        }
      }

      .fas {
        display: none;
        position: absolute;
        right: -1.2rem;
        top: .2rem;
      }
    }
  }
}
</style>