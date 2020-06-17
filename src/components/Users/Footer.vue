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
        <button >Add User</button>
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
  align-items: center;
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 1rem;

  .form-group {
    width: 100%;
    margin: 0 .5rem;
    position: relative;

    label {
      text-transform: capitalize;
      margin-bottom: .5rem;
    }

    label, input {
      display: block;
      width: 100%;
    }
  }

  .btn-container {
    position: absolute;
    bottom: 0;
  }
}
</style>