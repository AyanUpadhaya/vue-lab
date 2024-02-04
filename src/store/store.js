import { createStore } from "vuex";
import categoryModule from "./modules/categoryModule";
import menuModule from "./modules/menuModule";
import authModule from "./modules/auth"

const store = createStore({
  modules: {
    categories: categoryModule,
    menus: menuModule,
    auth:authModule
  },
});

export default store;
