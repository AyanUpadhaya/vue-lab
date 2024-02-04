<template>
  <SearchBar
    :path="'/add-menu'"
    :pathName="'Add Menu'"
    :placeholder="'Search Menu'"
    :handleSearch="handleSearch"
  ></SearchBar>
  <div class="flex gap-3 items-center my-4">
    <button
      class="btn border border-neutral-dark"
      :class="{ 'btn-neutral border-0': screen == 'table' }"
      @click="changeScreen('table')"
    >
      Show Table
    </button>
    <button
      class="btn border border-neutral-dark"
      :class="{ 'btn-neutral border-0 ': screen == 'cards' }"
      @click="changeScreen('cards')"
    >
      Show Cards
    </button>
  </div>
  <div v-if="screen == 'table'">
    <MenuTable :data="filteredMenus" :unixToDate="unixToDate"></MenuTable>
  </div>
  <div v-if="screen == 'cards'">
    <MenuCards :data="filteredMenus"></MenuCards>
  </div>
</template>

<script>
import SearchBar from "../components/shared/SearchBar.vue";
import MenuTable from "../tables/MenuTable.vue";
import MenuCards from "../components/cards/MenuCards.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      screen: "table",
      isTable: true,
      isCards: false,
      searchQuery: "",
    };
  },
  computed: {
    ...mapState({ menus: (state) => state.menus.menus }),

    filteredMenus() {
      return [...this.menus]
        .sort((a, b) => b.timestamp - a.timestamp)
        .filter(this.filterSearch);
    },
  },
  methods: {
    changeScreen(value) {
      this.screen = value;
    },
    filterSearch(menu) {
      return menu.menuName
        .toLowerCase()
        .startsWith(this.searchQuery.toLowerCase());
    },
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
  components: { SearchBar, MenuTable, MenuCards },
};
</script>

<style scoped></style>
