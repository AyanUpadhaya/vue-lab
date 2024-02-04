<template>
  <div>
    <h2>Dashboard</h2>
    <!-- <button class="btn btn-secondary" @click="logout">Logout</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>
