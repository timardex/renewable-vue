<template>
  <div id="notification">
    <i @click="hideNotification" class="far fa-times-circle"></i>
    <h3>{{userName}} {{userAddedRemoved}} successfully</h3>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: ''
    },
    userAddedRemoved: {
      type: String,
      default: ''
    },
    hideNotification: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

#notification {
  position: fixed;
  bottom: 1rem; left: 0; right: 0;
  width: 250px;
  margin: auto;
  text-align: center;
  padding: 1rem;
  background: $whiteB;

  i {
    position: absolute;
    top: 0; right: 0;
    background: $whiteC;
    padding: .2rem;
    cursor: pointer;
    border-bottom-left-radius: 5px;
  }

  h3 {
    margin: 0;
  }
}
</style>