<template>
  <div>
    <Pagination
      :data="data"
      :currentPage="currentMenuPage"
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
          <th class="font-bold text-neutral-200 text-start">Category</th>
          <th class="font-bold text-neutral-200 text-center">Price</th>
          <th class="font-bold text-neutral-200 text-center">Date</th>
          <th class="font-bold text-neutral-200 text-center">Action</th>
        </tr>
      </thead>
      <tbody class="overflow-y-auto">
        <!-- row 1 -->
        <tr v-for="(menu, index) in currentRows" :key="menu._id">
          <th class="font-normal text-neutral-200 text-center">
            {{ index + 1 }}
          </th>
          <td class="font-normal text-neutral-200 text-start">
            {{ menu?.menuName }}
          </td>
          <td class="font-normal text-neutral-200 text-start">
            {{ menu?.menuDescription }}
          </td>
          <td class="font-normal text-neutral-200 text-start">
            {{ getCategoryName(menu.categoryId) }}
          </td>
          <td class="font-normal text-neutral-200 text-center">
            {{ menu?.price }} $
          </td>
          <td class="font-normal text-neutral-200 text-center">
            {{ unixToDate(menu?.timestamp) }}
          </td>

          <td
            class="font-normal text-neutral-200 text-center flex gap-4 items-center justify-center"
          >
            <router-link :to="'/update-menu/' + menu._id"
              ><span class="">
                <i
                  class="fa-solid fa-pen-to-square fa-2xl"
                  style="color: #7d1d8e"
                ></i> </span
            ></router-link>
            <label
              for="confirmPopUp"
              class="cursor-pointer"
              @click="handleSelectId(menu._id)"
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
import { mapState, mapMutations, mapGetters } from "vuex";
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
    data: Array,
    unixToDate: Function,
  },
  computed: {
    ...mapState({
      currentMenuPage: (state) => state.menus.currentMenuPage,
      categories: (state) => state.categories.categories,
    }),
    ...mapGetters(["getCategoryName"]),
    indexOfLastRow() {
      return this.currentMenuPage * this.pagination.rowsPerPage;
    },
    indexOfFirstRow() {
      return this.indexOfLastRow - this.pagination.rowsPerPage;
    },
    currentRows() {
      if (!this.data) return [];

      const indexOfLastRow = this.currentMenuPage * this.pagination.rowsPerPage;
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
    ...mapMutations(["removeMenu", "changePage"]),
    handleRemove(id) {
      this.removeMenu({ id: id });
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
      // this.currentMenuPage = value;
      this.changePage({ page: parseInt(value) });
      console.log("Changed in menu");
    },
  },
  components: { ConfirmDeleteModal, Nodata, Pagination },
};
</script>

<style scoped></style>
