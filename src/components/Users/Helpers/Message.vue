<template>
  <div :is="tag" :class="`text ${alignText}`">{{message}}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    alignText: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
h1, h2, h3, h4, h5, h6 {
  background: $whiteB;
  padding: $spacing1 $spacing2;
  margin: 2rem 0 .2rem;
}
</style>