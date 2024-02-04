<template>
    <!-- submit buttons  -->
    <div class="w-full space-x-4">
          <!-- <button
            type="button"
            class="text-base px-10 py-3 text-white w-full max-w-[256px]"
            :class="isValid ? 'btn-primary shadow-btn' : 'btn-cancel '"
            :disabled="isValid ? false : true"
            @click="handleSubmit"
          >
            Save
          </button> -->
          <button
            type="button"
            class="text-base btn-primary px-10 py-4 text-white w-full max-w-[256px] "
          >
            Save
          </button>
          <button
            type="button"
            class="text-base btn-error px-10 py-4 text-white w-full max-w-[256px] "
          >
            Cancel
          </button>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>