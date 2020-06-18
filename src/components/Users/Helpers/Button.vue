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
  height: 35px;
  width: 35px;
  border: none;
  border-radius: 50px;
  background-color: $whiteC;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .15s linear;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: $primary;
  }
}
</style>