const menuModule = {
  state: () => {
    return {
      isLoading: false,
      currentMenuPage: 1,
      menus: [
        {
          _id: "menu1",
          menuName: "Spaghetti Bolognese",
          menuDescription: "Classic Italian pasta with rich meat sauce",
          categoryId: "one", // This should match the categoryId of the related category
          imageUrl:
            "https://supervalu.ie/thumbnail/800x600/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg",
          price: 12.99,
          timestamp: 1704401302,
        },
        {
          _id: "menu2",
          menuName: "Margherita Pizza",
          menuDescription:
            "Traditional pizza with tomato, mozzarella, and basil",
          categoryId: "two",
          imageUrl:
            "https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800",
          price: 10.99,
          timestamp: 1704402302,
        },
        {
          _id: "menu3",
          menuName: "Caesar Salad",
          menuDescription:
            "Fresh salad with romaine lettuce, croutons, and Caesar dressing",
          categoryId: "three",
          imageUrl:
            "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
          price: 8.99,
          timestamp: 1704403302,
        },
        {
          _id: "menu4",
          menuName: "Cheeseburger",
          menuDescription:
            "Classic beef burger with cheese, lettuce, and tomato",
          categoryId: "four",
          imageUrl:
            "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Triple-Cheeseburger-1:product-header-mobile?wid=768&hei=441&dpr=off",
          price: 9.99,
          timestamp: 1704404302,
        },
        {
          _id: "menu5",
          menuName: "Chocolate Brownie Sundae",
          menuDescription:
            "Decadent chocolate brownie with ice cream and fudge",
          categoryId: "five",
          imageUrl:
            "https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_9127_71974.jpg",
          price: 6.99,
          timestamp: 1704405302,
        },
        {
          _id: "menu6",
          menuName: "Mushroom Risotto",
          menuDescription:
            "Creamy Italian risotto with mushrooms and Parmesan cheese",
          categoryId: "one",
          imageUrl:
            "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg",
          price: 14.99,
          timestamp: 1704406302,
        },
      ],
    };
  },
  mutations: {
    addMenu(state, payload) {
      state.menus = [...state.menus, payload];
    },
    updateMenuById(state, payload) {
      state.menus = state.menus.map((menu) => {
        if (menu?._id === payload?.id) {
          return {
            ...menu,
            menuName: payload.menuName,
            menuDescription: payload.menuDescription,
            categoryId: payload.categoryId,
            imageUrl: payload.imageUrl,
            price: payload.price,
            timestamp: payload?.timestamp,
          };
        } else {
          return menu;
        }
      });
    },

    removeMenu(state, payload) {
      state.menus = state.menus.filter(
        (menu) => menu._id.toString() !== payload.id
      );
    },
    changePage(state, payload) {
      state.currentMenuPage = payload.page;
      console.log("changed page in menu");
    },
  },
  getters: {
    // ...
    getMenuById: (state) => (id) => {
      return state.menus.find((menu) => menu._id === id);
    },
  },
};

export default menuModule;
