<template>
  <div>
    <Pagination
      :data="data"
      :currentPage="currentPage"
      :rowsPerPage="pagination.rowsPerPage"
      :totalRows="currentRows.length"
      :totalPages="totalPages"
      :handleChangePage="handleChangePage"
    />
  </div>
  <div v-if="data.length > 0" class="overflow-x-auto">
    <table class="table">
      <!-- head -->

      <thead>
        <tr>
          <th class="font-bold text-neutral-200 text-center">SL</th>
          <th class="font-bold text-neutral-200 text-start">Name</th>
          <th class="font-bold text-neutral-200 text-start">Description</th>
          <th class="font-bold text-neutral-200 text-center">Date</th>
          <th class="font-bold text-neutral-200 text-center">Action</th>
        </tr>
      </thead>
      <tbody class="overflow-y-auto">
        <!-- row 1 -->
        <tr v-for="(category, index) in currentRows" :key="category._id">
          <th class="font-normal text-neutral-200 text-center">
            {{ index + 1 }}
          </th>
          <td class="font-normal text-neutral-200 text-start">
            {{ category?.categoryName }}
          </td>
          <td class="font-normal text-neutral-200 text-start">
            {{ category?.categoryDescription }}
          </td>
          <td class="font-normal text-neutral-200 text-center">
            {{ unixToDate(category?.timestamp) }}
          </td>
          <td
            class="font-normal text-neutral-200 text-center flex gap-4 items-center justify-center"
          >
            <router-link :to="'/update-category/' + category._id"
              ><span class="">
                <i
                  class="fa-solid fa-pen-to-square fa-2xl"
                  style="color: #7d1d8e"
                ></i> </span
            ></router-link>
            <label
              for="confirmPopUp"
              class="cursor-pointer"
              @click="handleSelectId(category._id)"
            >
              <i class="fa-solid fa-trash fa-2xl" style="color: #f01919"></i>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <Nodata></Nodata>
  </div>
  <ConfirmDeleteModal
    :handleStatus="handleRemove"
    :id="selectId.toString()"
  ></ConfirmDeleteModal>
</template>

<script>
import ConfirmDeleteModal from "../components/modals/ConfirmDeleteModal.vue";
import { mapState, mapMutations } from "vuex";
import Nodata from "../components/shared/Nodata.vue";
import Pagination from "../components/shared/Pagination.vue";
export default {
  data() {
    return {
      selectId: "",
      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
    unixToDate: Function,
  },
  computed: {
    ...mapState({ currentPage: (state) => state.categories.currentPage }),
    indexOfLastRow() {
      return this.currentPage * this.pagination.rowsPerPage;
    },
    indexOfFirstRow() {
      return this.indexOfLastRow - this.pagination.rowsPerPage;
    },
    currentRows() {
      if (!this.data) return [];

      const indexOfLastRow = this.currentPage * this.pagination.rowsPerPage;
      const indexOfFirstRow = indexOfLastRow - this.pagination.rowsPerPage;
      return this.data.slice(indexOfFirstRow, indexOfLastRow);
    },
    totalRows() {
      return this.data.length;
    },
    totalPages() {
      return Math.ceil(this.totalRows / this.pagination.rowsPerPage);
    },
  },

  methods: {
    ...mapMutations(["removeCategory", "changePage"]),
    handleRemove(id) {
      this.removeCategory({ id: id });
    },
    handleSelectId(id) {
      this.selectId = id;
    },
    getCurrentRows() {
      this.currentRows = this.data?.slice(
        this.indexOfFirstRow,
        this.indexOfLastRow
      );
    },
    handleChangePage(value) {
      this.currentPage = value;
      this.changePage({ page: parseInt(value) });
    },
  },

  components: { ConfirmDeleteModal, Nodata, Pagination },
};
</script>

<style scoped></style>
