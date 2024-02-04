<template>
  <BackButton :pathName="'Categories'" :path="'/categories'"></BackButton>
  <div class="mb-3">
    <label class="block text-base font-semibold">Name</label>
    <input
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full max-w-full"
      v-model="category_name"
      @input="(e) => (category_name = e.target.value)"
    />
  </div>
  <div class="mb-3">
    <label class="block text-base font-semibold">Description</label>
    <textarea
      placeholder="Description.."
      class="resize-none textarea textarea-bordered textarea-lg w-full max-w-full text-sm h-44"
      v-model="category_description"
      @input="(e) => (category_description = e.target.value)"
    ></textarea>
  </div>
  <button
    @click="createCategory"
    class="btn px-5 btn-neutral bg-green-600 border-0 text-white lg:block lg:ms-auto w-full lg:w-[200px]"
  >
    Submit
  </button>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BackButton from "../../components/shared/BackButton.vue";
export default {
  data() {
    return {
      category_name: "",
      category_description: "",
    };
  },
  computed: {
    ...mapState({ categories: (state) => state.categories.categories }),
  },
  methods: {
    goBack() {
      this.$router.push("/categories");
    },
    dateToUnix() {
      const date = new Date();
      return Math.floor(date.getTime() / 1000);
    },
    ...mapMutations(["addCateogry"]),
    createCategory() {
      this.addCateogry({
        _id: this.categories.length + 1,
        categoryName: this.category_name,
        categoryDescription: this.category_description,
        timestamp: this.dateToUnix(),
      });
      this.$router.push("/categories");
    },
  },
  components: { BackButton },
};
</script>

<style scoped></style>
