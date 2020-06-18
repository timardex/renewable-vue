<template>
  <p :class="`text ${alignText}`">{{message}}</p>
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
    }
  }
}
</script>