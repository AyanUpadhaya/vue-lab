<template>
  <BackButton :pathName="'Categories'" :path="'/categories'"></BackButton>
  <div class="mb-3">
    <label class="block text-base font-semibold">Name</label>
    <input
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full max-w-full"
      v-model="category_name"
    />
  </div>
  <div class="mb-3">
    <label class="block text-base font-semibold">Description</label>
    <textarea
      placeholder="Description.."
      class="resize-none textarea textarea-bordered textarea-lg w-full max-w-full text-sm h-44"
      v-model="category_description"
    ></textarea>
  </div>
  <button
    @click="updateCategory"
    class="btn px-5 btn-neutral bg-green-600 border-0 text-white lg:block lg:ms-auto w-full lg:w-[200px]"
  >
    Submit
  </button>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import BackButton from "../../components/shared/BackButton.vue";
export default {
  data() {
    return {
      category_name: "",
      category_description: "",
      category: null,
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["getCateogryById"]),
  },
  methods: {
    goBack() {
      this.$router.push("/categories");
    },
    dateToUnix() {
      const date = new Date();
      return Math.floor(date.getTime() / 1000);
    },
    getCategory() {
      this.category = this.getCateogryById(this.$route.params.id);
      if (this.category) {
        this.category_name = this.category.categoryName;
        this.category_description = this.category.categoryDescription;
      }
    },
    ...mapMutations(["updateCategoryById"]),
    updateCategory(e) {
      e.preventDefault();
      if (this.category) {
        this.updateCategoryById({
          id: this.category._id,
          category_name: this.category_name,
          category_description: this.category_description,
          timestamp: this.dateToUnix(),
        });
        this.goBack();
      } else {
        // Handle the case when this.category is null or undefined
        console.error("Category is null or undefined");
      }
    },
  },
  mounted() {
    this.getCategory();
  },
  components: { BackButton },
};
</script>

<style scoped></style>
