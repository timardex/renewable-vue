<template>
  <div id="app">
    <Users />
  </div>
</template>

<script>
const Users = () => import('@/components/Users')
export default {
  components: {
    Users
  }
}
</script>
