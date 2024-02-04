<template>
  <div
    class="bg-dark h-full duration-300"
    :class="{ 'w-[80px]': !showSidebar, 'w-[220px]': showSidebar }"
  >
    >

    <div class="w-full whitespace-nowrap shrink-0 mb-5">
      <div class="text-white">
        <router-link to="/" class="flex px-8 gap-2 items-center">
          <span class="shrink-0"><i class="fa-solid fa-hotel fa-xl"></i></span>
          <span v-if="showSidebar" class="text-2xl">Delwar</span>
        </router-link>
      </div>
    </div>
    <ul class="flex flex-col px-4 ">
      <!-- home -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == '/' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/"
          @click="setActive('/')"
        >
          <span class="shrink-0"><i class="fa-solid fa-house"></i></span>
          <span v-if="showSidebar">Home</span>
        </router-link>
      </li>
      <!-- users -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'users' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/users"
          @click="setActive('users')"
        >
          <span class="shrink-0"><i class="fa-solid fa-user"></i></span>
          <span v-if="showSidebar">Users</span>
        </router-link>
      </li>
      <!-- categories -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'categories' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/categories"
          @click="setActive('categories')"
        >
          <span class="shrink-0"><i class="fa-solid fa-layer-group"></i></span>
          <span v-if="showSidebar">Categories</span>
        </router-link>
      </li>
      <!-- menus -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'menus' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/menus"
          @click="setActive('menus')"
        >
          <span class="shrink-0"><i class="fa-solid fa-bars"></i></span>
          <span v-if="showSidebar">Categories</span>
        </router-link>
      </li>
      <!-- staffs -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'staffs' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/staffs"
          @click="setActive('staffs')"
        >
          <span class="shrink-0"
            ><i class="fa-solid fa-clipboard-user"></i
          ></span>
          <span v-if="showSidebar">Staffs</span>
        </router-link>
      </li>
      <!-- orders -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'orders' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/orders"
          @click="setActive('orders')"
        >
          <span class="shrink-0"><i class="fa-solid fa-box"></i></span>
          <span v-if="showSidebar">Orders</span>
        </router-link>
      </li>
      <!-- inventory -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'inventory' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/inventory"
          @click="setActive('inventory')"
        >
          <span class="shrink-0"><i class="fa-solid fa-warehouse"></i></span>
          <span v-if="showSidebar">Inventory</span>
        </router-link>
      </li>
      <!-- <li
        class="py-2 px-2 font-normal text-white" 
        :class="{ active: activeLink == 'reservations' }"
      >
        <router-link class="flex gap-2 items-center px-2" to="/reservations" @click="setActive('reservations')" 
          >Reservations</router-link
        >
      </li>
      <li
        class="py-2 px-2 font-normal text-white" 
        :class="{ active: activeLink == 'notifications' }"
      >
        <router-link class="flex gap-2 items-center px-2" to="/notifications" @click="setActive('notifications')" 
          >Notifications</router-link
        >
      </li>
      <li
        class="py-2 px-2 font-normal text-white" 
        :class="{ active: activeLink == 'feedback' }"
      >
        <router-link class="flex gap-2 items-center px-2" to="/feedback" @click="setActive('feedback')" 
          >Feedback</router-link
        >
      </li> -->
      <!-- settings -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'settings' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/settings"
          @click="setActive('settings')"
        >
          <span class="shrink-0"> <i class="fa-solid fa-gear"></i></span>
          <span v-if="showSidebar">Settings</span>
        </router-link>
      </li>
      <!-- test -->
      <li
        class="py-2 px-2 font-normal text-white"
        :class="{ active: activeLink == 'test' }"
      >
        <router-link
          class="flex gap-2 items-center px-2"
          to="/test"
          @click="setActive('test')"
        >
          <span class="shrink-0"> <i class="fa-solid fa-gear"></i></span>
          <span v-if="showSidebar">Test</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    activeLink: String,
    setActive: Function,
    showSidebar: Boolean,
  },
};
</script>

<style scoped>
.active {
  background-color: white;
  color: #212121;
  border-radius: 8px;
}
</style>
