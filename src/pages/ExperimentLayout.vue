<template>
  <div class="flex items-stretch">
    <div class="border border-neutral-400">
      <Experiment></Experiment>
    </div>
    <div class="p-6 h-screen ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Experiment from "./Experiment.vue";
export default {
  components: {
    Experiment,
  },
};
</script>

<style scoped></style>
