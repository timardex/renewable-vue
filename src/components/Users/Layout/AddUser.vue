<template>
  <div id="add-user">
    <form
      class="form"
      @submit.prevent="addUser"
      v-for="(title, index) in titles"
      :key="index">

      <div
        class="form-group"
        v-for="(key, name) in title"
        :key="name">

        <input
          :type="`${name === 'email' ? 'email' : 'text'}`" 
          :placeholder="name"
          :id="name"
          :name="name"
          v-model="form[name]"
          required
          autocomplete="off"
          class="form-field"/>

        <label class="form-label" :for="name">{{name}}</label>
      </div>

      <div class="btn-container text-center">
        <Button title="Add User" color-style="green" icon="fas fa-plus-circle" />
      </div>
    </form>
  </div>
</template>

<script>
const Button = () => import('@/components/Users/Helpers/Button')

export default {
  components: {
    Button
  },
  props: {
    titles: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    form: {}
  }),
  methods: {
    addUser() {
      this.$store.dispatch('users/addUser', this.form)
      this.form = {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

#add-user {
  margin: 0;
  padding: $spacing1 $spacing2;

  p {
    margin: 0;
  }
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media(max-width: $sizeSM) {
    display: block;
    padding: 0 0rem 2rem;
  }

  .form-group {
    width: 50%;

    @media(max-width: $sizeSM) {
      width: 100%;
    }

    .form-field {
      width: 85%;

      @media(max-width: $sizeSM) {
        width: 100%;
      }
    }

    .form-label {
      text-transform: capitalize;
    }
  }

  .btn-container {
    position: absolute;
    right: -1.5rem;

    @media(max-width: $sizeSM) {
      bottom: 0;
    }
  }
}
</style>