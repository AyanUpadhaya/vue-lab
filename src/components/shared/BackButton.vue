<template>
  <div>
    <button class="btn mb-3" @click="openPath">
      <i class="fa-solid fa-arrow-left"></i> {{ pathName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pathName: String,
    path: String,
  },
  methods: {
    openPath() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped></style>
