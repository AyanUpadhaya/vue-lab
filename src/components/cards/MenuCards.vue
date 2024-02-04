<template>
  <div class="flex justify-end px-4 py-2">
    <CategorySelect
      :selectedCategory="selectedCategory"
      :menus="data"
      v-on:update:selectedCategory="handleCategoryChange"
    ></CategorySelect>
  </div>
  <div
    v-if="filteredMenus.length > 0"
    class="w-full h-full overflow-auto p-2 flex flex-wrap gap-3"
  >
    <div
      v-for="item in filteredMenus"
      :key="item.id"
      class="flex flex-col max-w-[350px] bg-base-100 shadow-xl"
    >
      <figure class="flex-1">
        <img
          :src="item?.imageUrl"
          :alt="item?.menuName"
          class="w-full h-[240px] object-cover"
        />
      </figure>
      <div class="card-body flex flex-col justify-between">
        <h2 class="card-title">{{ item?.menuName }}</h2>
        <p>{{ item?.menuDescription }}</p>
        <div class="card-actions justify-start items-center">
          <p class="font-semibold">Price: {{ item?.price }}</p>
          <button class="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Nodata></Nodata>
  </div>
</template>

<script>
import CategorySelect from "../shared/CategorySelect.vue";
import Nodata from "../shared/Nodata.vue";

export default {
  data() {
    return {
      selectedCategory: "",
    };
  },
  props: {
    data: Array,
  },
  computed: {
    filteredMenus() {
      if (this.selectedCategory) {
        // If a category is selected, filter menus based on category ID
        return this.data.filter(
          (menu) => menu.categoryId === this.selectedCategory
        );
      } else {
        // If no category is selected (All Categories), show all menus
        return this.data;
      }
    },
  },
  methods: {
    handleCategoryChange(newSelectedCategory) {
      // Handle the category change here
      this.selectedCategory = newSelectedCategory;
    },
  },
  components: { CategorySelect, Nodata },
};
</script>

<style scoped></style>
