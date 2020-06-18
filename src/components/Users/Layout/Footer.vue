<template>
  <div class="add-user">
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
        <Button title="Add User" icon="fas fa-plus-circle" />
      </div>
    </form>
  </div>
</template>

<script>
const Button = () => import('@/components/Users//Helpers/Button')
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

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  padding: 0 1rem;

  @media(max-width: $sizeSM) {
    display: block;
    padding: 0 1rem 2rem;
  }

  .form-group {
    position: relative;
    padding: 1rem 0 0;
    width: 50%;
    margin-bottom: 1rem;

    @media(max-width: $sizeSM) {
      width: 100%;
    }
  }

  .form-field {
    font-family: inherit;
    width: 80%;
    border: 0;
    border-bottom: 1px solid $white;
    outline: 0;
    font-size: 1rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    @media(max-width: $sizeSM) {
      width: 100%;
    }

    &:required,&:invalid { box-shadow:none; }

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form-label {
      font-size: 1rem;
      cursor: text;
      top: 1rem;
    }

    &:focus {
      ~ .form-label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
      }
      
      padding-bottom: 6px;  
      font-weight: 700;
      border-width: 1px;
      border-image: linear-gradient(to right, $primary,$secondary);
      border-image-slice: 1;
    }
  }

  .form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $white;
    text-transform: capitalize;
  }

  .btn-container {
    position: absolute;
    right: .5rem;

    @media(max-width: $sizeSM) {
      bottom: .5rem;
    }
  }
}
</style>