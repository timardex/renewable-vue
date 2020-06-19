<template>
  <div id="notification">
    <div>
      <i @click="hideNotification" class="far fa-times-circle"></i>
      <p>{{userName}} {{userAddedRemoved}} successfully</p>
    </div>
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
    }
  },
  methods: {
    hideNotification() {
      const notification = {
        name: '',
        notification: ''
      }
      this.$store.dispatch('users/userName', notification)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

#notification {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  width: 100%;
  height: 100%;
  max-width: $sizeMD;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  pointer-events: none;

  div {
    position: relative;
    text-align: center;
    background: $white;
    max-width: 250px;
    margin: 1rem;
    padding: 1rem;
    pointer-events: all;
    border-radius: 5px;
  }

  i {
    position: absolute;
    top: -.5rem; right: -.5rem;
    background: $primary;
    padding: .2rem;
    cursor: pointer;
    border-radius: 50%;
  }

  p {
    margin: 0;
  }
}
</style>