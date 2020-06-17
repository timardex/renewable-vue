<template>
  <ul>
    <li>
      <span v-for="(title, index) in titles" :key="index">
        {{title}}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    titles: [
      'Name', 'Email', 'Company'
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

ul {
  li {
    span {
      text-align: center;
      text-transform: capitalize;
    }
  }
}
</style>