<template>
  <div id="app">
    <div class="container">
      <app-form @userAdded="addUser"></app-form>
      <app-users :users="users" @userDeleted="deleteUser"></app-users>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import AppForm from "./components/AppForm.vue";
import Users from "./components/Users.vue";

export default {
  data() {
    return {
      users: [
        {
          name: "Daniel",
          email: "dobrevdani@gmail.com",
          age: 29,
          selectedGender: "Male"
        }
      ]
    };
  },
  components: {
    "app-form": AppForm,
    "app-users": Users
  },
  methods: {
    addUser(user) {
      this.users.push(user);
    },
    deleteUser(index) {
      this.users.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

