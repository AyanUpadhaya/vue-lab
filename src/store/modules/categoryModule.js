const categoryModule = {
  state: () => {
    return {
      isLoading: false,
      currentPage: 1,
      categories: [
        {
          _id: "one",
          categoryName: "Pasta",
          categoryDescription: "Lorem ipsum dolor si maet",
          timestamp: 1704401302,
        },
        {
          _id: "two",
          categoryName: "Pizza",
          categoryDescription: "Delicious Italian pizza with various toppings",
          timestamp: 1704402302,
        },
        {
          _id: "three",
          categoryName: "Salads",
          categoryDescription: "Fresh and healthy salad options",
          timestamp: 1704403302,
        },
        {
          _id: "four",
          categoryName: "Burgers",
          categoryDescription: "Mouth-watering burgers with juicy patties",
          timestamp: 1704404302,
        },
        {
          _id: "five",
          categoryName: "Desserts",
          categoryDescription: "Sweet treats to satisfy your cravings",
          timestamp: 1704405302,
        },
        {
          _id: "six",
          categoryName: "Drinks",
          categoryDescription: "Refreshing beverages for every taste",
          timestamp: 1704406302,
        },
        {
          _id: "seven",
          categoryName: "Seafood",
          categoryDescription: "Fresh and flavorful seafood options",
          timestamp: 1704407302,
        },
        {
          _id: "eight",
          categoryName: "Sandwiches",
          categoryDescription: "Classic and innovative sandwich choices",
          timestamp: 1704408302,
        },
        {
          _id: "nine",
          categoryName: "Vegetarian",
          categoryDescription: "Delicious vegetarian options for everyone",
          timestamp: 1704409302,
        },
        {
          _id: "ten",
          categoryName: "Steaks",
          categoryDescription: "Sizzling steaks cooked to perfection",
          timestamp: 1704410302,
        },
        {
          _id: "eleven",
          categoryName: "Soups",
          categoryDescription: "Warm and comforting soups for any occasion",
          timestamp: 1704411302,
        },
        {
          _id: "twelve",
          categoryName: "Breakfast",
          categoryDescription:
            "Start your day right with our tasty breakfast choices",
          timestamp: 1704412302,
        },
      ],
    };
  },
  mutations: {
    addCateogry(state, payload) {
      state.categories = [...state.categories, payload];
    },
    updateCategoryById(state, payload) {
      state.categories = state.categories.map((category) => {
        if (category?._id === payload?.id) {
          return {
            ...category,
            categoryName: payload.category_name,
            categoryDescription: payload.category_description,
            timestamp: payload?.timestamp,
          };
        } else {
          return category;
        }
      });
    },

    removeCategory(state, payload) {
      state.categories = state.categories.filter(
        (category) => category._id.toString() !== payload.id
      );
    },
    changePage(state, payload) {
      state.currentPage = payload.page;
      console.log("changed page in category");
    },
  },
  getters: {
    // ...
    getCateogryById: (state) => (id) => {
      return state.categories.find((category) => category._id === id);
    },
    getCategoryName: (state) => (id) => {
      const category = state.categories.find((category) => {
        if (category._id === id) {
          return category;
        }
      });
      return category.categoryName;
    },
  },
};

export default categoryModule;
