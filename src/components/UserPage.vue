<template>
  <div>
    <h1>User Page</h1>
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
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style>
</style>
