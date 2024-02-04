<template>
  <SearchBar
    :path="'/add-category'"
    :pathName="'Add Category'"
    :placeholder="'Search Category'"
    :handleSearch="handleSearch"
  ></SearchBar>
  <div>
    <CategoryTable
      :data="filteredCategories"
      :unixToDate="unixToDate"
    ></CategoryTable>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SearchBar from "../components/shared/SearchBar.vue";
import ConfirmDeleteModal from "../components/modals/ConfirmDeleteModal.vue";
import CategoryTable from "../tables/CategoryTable.vue";
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState({ categories: (state) => state.categories.categories }),

    filteredCategories() {
      return [...this.categories]
        .sort((a, b) => b.timestamp - a.timestamp)
        .filter(this.filterSearch);
    },
  },
  methods: {
    unixToDate(timestamp) {
      return new Date(timestamp * 1000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
        .split(" ")[0];
    },

    dateToUnix() {
      const date = new Date();
      return Math.floor(date.getTime() / 1000);
    },
    openAddCategory() {
      this.$router.push("/add-category");
    },
    filterSearch(category) {
      return category.categoryName
        .toLowerCase()
        .startsWith(this.searchQuery.toLowerCase());
    },
    handleSearch(value) {
      this.searchQuery = value;
    },
  },
  components: { SearchBar, ConfirmDeleteModal, CategoryTable },
};
</script>

<style scoped></style>
