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
      />
    </div>
    <div class="mb-3">
      <label class="block text-base font-semibold">Image</label>
      <input
        type="text"
        placeholder="Add Image Url"
        class="input input-bordered w-full max-w-full"
        v-model="imageUrl"
      />
    </div>
    <div class="mb-3">
      <label class="block text-base font-semibold">Select menu</label>
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
      ></textarea>
    </div>
    <button
      @click="updateMenu"
      class="btn px-5 btn-neutral bg-green-600 border-0 text-white lg:block lg:ms-auto w-full lg:w-[200px]"
    >
      Submit
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
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
    // mix the getters into computed with object spread operator
    ...mapGetters(["getMenuById"]),
  },
  methods: {
    goBack() {
      this.$router.push("/menus");
    },
    dateToUnix() {
      const date = new Date();
      return Math.floor(date.getTime() / 1000);
    },
    getMenu() {
      this.menu = this.getMenuById(this.$route.params.id);
      if (this.menu) {
        this.menuName = this.menu.menuName;
        this.menuDescription = this.menu.menuDescription;
        this.selectedCategory = this.menu.categoryId;
        this.categoryId = this.menu.categoryId;
        this.price = this.menu.price;
        this.imageUrl = this.menu.imageUrl;
      }
    },
    ...mapMutations(["updateMenuById"]),
    updateMenu(e) {
      e.preventDefault();
      if (this.menu) {
        this.updateMenuById({
          id: this.menu._id,
          menuName: this.menuName,
          menuDescription: this.menuDescription,
          categoryId: this.selectedCategory,
          price: this.price,
          imageUrl: this.imageUrl,
          timestamp: this.dateToUnix(),
        });
        this.goBack();
      } else {
        console.error("Menu is null or undefined");
      }
    },
    handleCategoryChange(newSelectedCategory) {
      this.selectedCategory = newSelectedCategory;
      console.log(this.selectedCategory);
    },
  },
  mounted() {
    this.getMenu();
  },
  components: { BackButton, CategorySelect },
};
</script>

<style scoped></style>
