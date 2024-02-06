import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";
//layout
import Layout from "../layout/Layout.vue";

//forms
import AddCategory from "../forms/categories/AddCategory.vue";
import UpdateCategory from "../forms/categories/UpdateCategory.vue";
import AddMenu from "../forms/menus/AddMenu.vue";
import UpdateMenu from "../forms/menus/UpdateMenu.vue";

//pages
import Home from "../pages/Home.vue";
import Users from "../pages/Users.vue";
import Categories from "../pages/Categories.vue";
import Menus from "../pages/Menus.vue";
import Staffs from "../pages/Staffs.vue";
import Orders from "../pages/Orders.vue";
import Inventory from "../pages/Inventory.vue";
import Reservations from "../pages/Reservations.vue";
import Notifications from "../pages/Notifications.vue";
import Settings from "../pages/Settings.vue";
import Test from "../pages/Test.vue";
import Feedback from "../pages/Feedback.vue";
import Profile from "../pages/Profile.vue";
import Login from "../authentication/Login.vue"
import Registration from "../authentication/Registration.vue"

//experiment
import ExperimentLayout from "../pages/ExperimentLayout.vue"
import Dashboard from "../pages/Dashboard.vue"
import ServiceCategory from "../pages/ServiceCategory.vue"
import ServiceSubCategory from "../pages/ServiceSubCategory.vue"
import WithdrawRequest from "../pages/WithdrawRequest.vue"
import WithdrawHistory from "../pages/WithdrawHistory.vue"
import Agents from "../pages/Agents.vue"
import OurUsers from "../pages/OurUsers.vue"
import Businesses from "../pages/Businesses.vue"






import store from "../store/store"

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: "/test",
        name: "test",
        component: Test,
      },
      {
        path: "/users",
        name: "users",
        component: Users,
      },

      {
        path: "/categories",
        name: "categories",
        component: Categories,
      },
      {
        path: "/menus",
        name: "menus",
        component: Menus,
      },
      {
        path: "/staffs",
        name: "staffs",
        component: Staffs,
      },
      {
        path: "/orders",
        name: "orders",
        component: Orders,
      },
      {
        path: "/inventory",
        name: "inventory",
        component: Inventory,
      },
      {
        path: "/reservations",
        name: "reservations",
        component: Reservations,
      },
      {
        path: "/notifications",
        name: "notifications",
        component: Notifications,
      },
      {
        path: "/feedback",
        name: "feedback",
        component: Feedback,
      },
      {
        path: "/settings",
        name: "settings",
        component: Settings,
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
      },
      //forms
      {
        path: "/add-category",
        name: "add-category",
        component: AddCategory,
      },
      {
        path: "/update-category/:id",
        component: UpdateCategory,
      },
      {
        path: "/add-menu",
        name: "add-menu",
        component: AddMenu,
      },
      {
        path: "/update-menu/:id",
        component: UpdateMenu,
      },
    ],
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/registration",
    component:Registration
  },
  {
    path:'/experiment',
    component:ExperimentLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Home,
      },
      {
        path: "/service-category",
        name: "service-category",
        component: ServiceCategory,
      },
      {
        path: "/service-sub-category",
        name: "service-sub-category",
        component: ServiceSubCategory,
      },
      {
        path: "/agents",
        name: "agents",
        component: Agents,
      },
      {
        path: "/businesses",
        name: "businesses",
        component: Businesses,
      },
      {
        path: "/withdraw-request",
        name: "withdraw-request",
        component: WithdrawRequest,
      },
      {
        path: "/withdraw-history",
        name: "withdraw-history",
        component: WithdrawHistory,
      },
      {
        path: "/our-users",
        name: "our-users",
        component: OurUsers,
      },
      
    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!store.state.auth.isAuthenticated) {
      next('/login'); // Redirect to login page if not authenticated
    } else {
      next(); // Proceed to the route if authenticated
    }
  } else {
    next(); // Continue for routes that don't require authentication
  }
});
export default router;
