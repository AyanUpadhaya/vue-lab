<template>
  <BackButton :pathName="'Menus'" :path="'/menus'"></BackButton>
  <div class="p-4">
    <div class="mb-3">
      <label class="block text-base font-semibold">Name</label>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-full"
        v-model="menuName"
        @input="(e) => (menuName = e.target.value)"
      />
    </div>
    <div class="mb-3">
      <label class="block text-base font-semibold">Image</label>
      <input
        type="text"
        placeholder="Add Image Url"
        class="input input-bordered w-full max-w-full"
        v-model="imageUrl"
        @input="(e) => (imageUrl = e.target.value)"
      />
    </div>
    <div class="mb-3">
      <label class="block text-base font-semibold">Select Category</label>
      <CategorySelect
        :selectedCategory="selectedCategory"
        v-on:update:selectedCategory="handleCategoryChange"
        :showlable="false"
      ></CategorySelect>
    </div>
    <div class="mb-3">
      <label class="block text-base font-semibold">Description</label>
      <textarea
        placeholder="Description.."
        class="resize-none textarea textarea-bordered textarea-lg w-full max-w-full text-sm h-44"
        v-model="menuDescription"
        @input="(e) => (menuDescription = e.target.value)"
      ></textarea>
    </div>
    <button
      @click="createMenu"
      class="btn px-5 btn-neutral bg-green-600 border-0 text-white lg:block lg:ms-auto w-full lg:w-[200px]"
    >
      Submit
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BackButton from "../../components/shared/BackButton.vue";
import CategorySelect from "../../components/shared/CategorySelect.vue";
export default {
  data() {
    return {
      menuName: "",
      menuDescription: "",
      selectedCategory: "",
      price: "",
      categoryId: "",
      imageUrl: "",
    };
  },
  computed: {
    ...mapState({ menus: (state) => state.menus.menus }),
  },
  methods: {
    goBack() {
      this.$router.push("/menus");
    },
    dateToUnix() {
      const date = new Date();
      return Math.floor(date.getTime() / 1000);
    },
    ...mapMutations(["addMenu"]),
    createMenu() {
      this.addMenu({
        _id: this.menus.length + 1,
        menuName: this.menuName,
        menuDescription: this.menuDescription,
        categoryId: this.selectedCategory,
        imageUrl: this.imageUrl,
        price: this.price,
        timestamp: this.dateToUnix(),
      });
      this.$router.push("/menus");
    },
    handleCategoryChange(newSelectedCategory) {
      this.selectedCategory = newSelectedCategory;
    },
  },
  components: { BackButton, CategorySelect },
};
</script>

<style scoped></style>
