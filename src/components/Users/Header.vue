<template>
  <ul class="responsive-table">
    <li v-for="(title, index) in titles" :key="index" class="table-header">
      <div v-for="(key, name) in title" :key="name" class="col">
        <span @click="sortBy(name)">{{name}}</span>
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

</style>