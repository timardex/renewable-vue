<template>
  <div id="search">
    <div class="form-group">
      <input
        type="text"
        placeholder="Search by User, Email or Company"
        name="search"
        id="search-field"
        class="form-field"
        autocomplete="off"
        v-model="searchQuery"
        @input="searchFilter"/>
      <label class="form-label" for="search-field">Search by User, Email or Company</label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchQuery: ''
  }),
  methods: {
    searchFilter() {
      this.$store.dispatch('users/searchFilter', this.searchQuery)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

#search {
  margin: 0;
  padding: $spacing1 $spacing2;
}

.form-group {
  width: 100%;

  .form-field {
    width: 100%;
  }
}
</style>