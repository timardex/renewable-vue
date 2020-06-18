<template>
  <div id="search">
    <div class="form-group">
      <input
        type="text"
        placeholder="Search by User, Email or Company"
        name="search"
        id="search-field"
        class="form-field"
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
  margin-top: 1rem;
  background: $whiteB;
  padding: 1rem;

  @media(max-width: $sizeSM) {
    padding: 0 1rem;
  }
}

.form-group {
  width: 100%;

  .form-field {
    width: 100%;
  }
}
</style>