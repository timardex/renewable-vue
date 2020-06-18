<template>
  <div class="add-user">
    <form class="form" @submit.prevent="addUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" required/>
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input type="text" id="company" name="company" v-model="company" required/>
      </div>

      <div class="btn-container text-center">
        <button title="Add User"><i class="fas fa-plus-circle"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    company: ''
  }),
  methods: {
    addUser() {
      const newUser = [
        {name: this.name,
        email: this.email,
        company: this.company}
      ]

      this.$store.dispatch('users/addUser', newUser);

      this.name = '';
      this.email = '';
      this.company = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  padding-bottom: 2rem;
  margin: 1rem 0;

  .form-group {
    width: 100%;
    position: relative;

    label {
      text-transform: capitalize;
      margin-bottom: .5rem;
    }

    input {
      padding: .2rem;
      border: 1px solid rgba(0,0,0,.2)
    }

    label, input {
      display: block;
      width: 95%;
    }
  }
}
</style>