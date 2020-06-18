<template>
  <ul class="responsive-table">
    <li class="table-header">
      <div v-for="(title, index) in titles" :key="index" class="col">
        {{title}}
      </div>
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

</style>