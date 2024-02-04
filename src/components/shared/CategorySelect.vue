<template>
  <div>
    <!-- Filter Selection Box -->
    <div class="mb-4 flex gap-3 items-center">
      <label v-if="showlable" for="categoryFilter" class="text-neutral-500"
        >Filter by Category:</label
      >
      <select
        v-model="localSelectedCategory"
        id="categoryFilter"
        class="select select-bordered"
      >
        <option value="" selected>All Categories</option>
        <option
          v-for="category in categories"
          :key="category._id"
          :value="category._id"
        >
          {{ category.categoryName }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      localSelectedCategory: this.selectedCategory || "", // Use a local copy
    };
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: String,
      default: "", // Default value for the selectedCategory prop
    },

    showlable: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    // Watch changes in the selectedCategory prop
    selectedCategory(newVal) {
      this.localSelectedCategory = newVal || ""; // Update the local copy when prop changes
    },
    // Watch changes in the localSelectedCategory and emit an event
    localSelectedCategory(newVal) {
      this.$emit("update:selectedCategory", newVal);
    },
  },
  computed: {
    ...mapState({ categories: (state) => state.categories.categories }),
  },
};
</script>

<style scoped></style>
