<template>
  <div>
    <h1>Add User</h1>
    <form class="form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" v-model="user.age">
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <select class="form-control" v-model="user.selectedGender">
          <option v-for="gender in user.genders" :key="gender">{{ gender }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addUser">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        age: null,
        selectedGender: "Male",
        genders: ["Male", "Female"]
      }
    };
  },
  methods: {
    addUser() {
      this.$emit("userAdded", this.user);
    }
  }
};
</script>
<style scoped>
.form {
  max-width: 500px;
  margin: 50px 0;
}
</style>
