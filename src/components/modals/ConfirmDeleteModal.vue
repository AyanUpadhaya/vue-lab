<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="confirmPopUp" class="modal-toggle" />
  <div class="modal modal-middle" role="dialog">
    <div class="modal-box flex flex-col gap-4 items-center justify-center">
      <i
        class="fa-solid fa-triangle-exclamation fa-2xl text-9xl"
        style="color: #fa0000"
      ></i>
      <h3 class="text-4xl font-semibold">Are you Sure?</h3>
      <div class="my-3 flex gap-4">
        <label
          for="confirmPopUp"
          class="btn btn-sm btn-primary text-white rounded-[50px] px-4 py-2"
          @click="handleStatus(id)"
          >Delete</label
        >
        <label
          class="btn btn-sm btn-secondary text-white rounded-[50px] px-4 py-2"
          for="confirmPopUp"
          >Close</label
        >
      </div>
    </div>
    <label class="modal-backdrop" for="confirmPopUp">Close</label>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    handleStatus: Function,
    id: String,
  },
};
</script>

<style scoped></style>
