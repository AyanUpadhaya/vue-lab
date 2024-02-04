<template>
  <div
    class="flex justify-between w-full px-3 bg-black-900 z-50 py-3 rounded-lg"
  >
    <button
      v-if="showButton"
      class="btn btn-active btn-neutral"
      @click="openPath"
    >
      {{ pathName }}
    </button>
    <div v-if="showLable" class="text-3xl text-white">{{ labelText }}</div>
    <div class="form-control flex-1 max-w-sm">
      <input
        type="text"
        :placeholder="placeholder"
        class="input input-bordered w-24 md:w-auto"
        @input="(e) => handleSearch(e.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    pathName: String,
    placeholder: String,
    handleSearch: Function,
    showButton: {
      type: Boolean,
      default: true,
    },
    showLable: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
      default: "",
    },
  },
  methods: {
    openPath() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped></style>
