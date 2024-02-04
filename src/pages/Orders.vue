<template>
  <div>
    <SearchBar
      :path="''"
      :pathName="'Add Menu'"
      :placeholder="'Search Menu'"
      :handleSearch="handleSearch"
      :showButton="false"
      :showLable="true"
      :labelText="'Orders'"
    ></SearchBar>
  </div>
  <div>
    <OrdersTable></OrdersTable>
  </div>
</template>

<script>
import SearchBar from "../components/shared/SearchBar.vue";
import OrdersTable from "../tables/OrdersTable.vue";
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    // filterSearch(menu) {
    //   return menu.menuName
    //     .toLowerCase()
    //     .startsWith(this.searchQuery.toLowerCase());
    // },
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

    handleSearch(value) {
      this.searchQuery = value;
    },
  },
  components: { SearchBar, OrdersTable },
};
</script>

<style scoped></style>
