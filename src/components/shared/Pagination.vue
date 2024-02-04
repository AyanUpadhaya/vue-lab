<template>
  <div class="flex items-center justify-between mt-4 px-4">
    <div>
      <span class="text-neutral-200 mr-2">Page:</span>
      <select @change="changePage" class="select select-bordered">
        <option
          v-for="page in totalPages"
          :key="page"
          :selected="currentPage == page"
          :value="page"
        >
          {{ page }}
        </option>
      </select>
    </div>
    <div>
      <span class="text-neutral-200 mr-2">Total Pages: {{ totalPages }}</span>
      <span class="text-neutral-200">Total Rows: {{ totalRows }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    rowsPerPage: {
      type: Number,
      default: 10,
    },
    totalRows: Number,
    totalPages: Number,
    handleChangePage: Function,
    currentPage: Number,
  },
  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.rowsPerPage;
      const endIndex = startIndex + this.rowsPerPage;
      return this.data.slice(startIndex, endIndex);
    },
  },
  methods: {
    changePage(e) {
      this.handleChangePage(parseInt(e.target.value));
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
