<template>
  <div class="navbar bg-base-100 shadow-md text-nutral-dark">
    <div class="flex-1">
      <button class="btn btn-square btn-ghost" @click="setShowSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="badge badge-xs badge-primary indicator-item rounded-full h-5 w-5"
            >5</span
          >
        </div>
      </button>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="text-dark dropdown-content -mt-2 z-[100] p-2 shadow bg-base-100 w-52 px-2 space-y-2 rounded"
        >
          <li>
            <router-link class="flex gap-2 items-center px-2" to="/profile">
              <span class="shrink-0"><i class="fa-solid fa-user"></i></span>
              <span>Profile</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="flex gap-2 items-center px-2 text-black"
              to="/settings"
            >
              <span class="shrink-0"> <i class="fa-solid fa-gear"></i></span>
              <span>Settings</span>
            </router-link>
          </li>
          <li>
            <button
              @click="logout"
              class="btn btn-success w-full text-white bg-red-600"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    setShowSidebar: Function,
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
