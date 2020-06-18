<template>
  <button :title="title" :class="colorStyle"><i :class="icon"></i></button>
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
    },
    colorStyle: {
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
  background-color: $white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .15s linear;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    color: $white;
    
    &.green {
      background-color: $primary;
    }

    &.red {
      background-color: $third;
    }
  }
}
</style>