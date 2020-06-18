<template>
  <button :title="title"><i :class="icon"></i></button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

button {
  cursor: pointer;
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 50px;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    border: none;
    outline: none;
  }
}
</style>