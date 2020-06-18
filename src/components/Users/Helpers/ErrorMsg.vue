<template>
  <p class="text-center">{{message}}</p>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>