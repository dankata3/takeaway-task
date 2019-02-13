<template>
  <div>
    <h2>Users</h2>
    <div class="row">
      <router-link
        tag="div"
        class="col-sm-6 col-md-4 col-lg-3 user"
        :key="index"
        v-for="(user, index) in users"
        :to="`/users/${index}`"
      >
        <button type="button" class="close" aria-label="Close" @click.stop="deleteUser(index)">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3>{{ user.name }}</h3>
        <p>
          Age:
          <strong>{{ user.age }}</strong>
        </p>
        <p>
          Gender:
          <strong>{{ user.selectedGender }}</strong>
        </p>
        <p>
          Email:
          <strong>{{ user.email }}</strong>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["users"],
  methods: {
    deleteUser(index) {
      this.$emit("userDeleted", index);
    }
  }
};
</script>

<style scoped>
.user {
  border: 1px solid rgb(216, 216, 216);
  padding: 8px 16px;
  cursor: pointer;
}
</style>
