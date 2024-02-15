<template class="h-full overflow-auto">
  <!-- submit buttons  -->
  <div class="w-full space-x-4">
    <!-- :class="routePath === 'knowledge' ? 'text-primaryPure' : ''" -->

    <button
      type="button"
      class="text-base btn-primary px-10 py-4 text-white w-full max-w-[256px]"
    >
      Save
    </button>
    <button
      type="button"
      class="text-base btn-error px-10 py-4 text-white w-full max-w-[256px]"
    >
      Cancel
    </button>
  </div>
  <hr />
  <div class="mt-8">
    
    <!-- service category -->
    <div class="overflow-hidden">
      <!-- service -->
      <div
        class="rounded-lg flex items-center justify-between gap-2 max-w-max group w-full py-4 px-6 hover:bg-green-400 duration-200 hover:text-white cursor-pointer"
        @click="handleToggleDropdown('service-category', false)"
        :class="
          activeDropdown == 'service-category'
            ? 'bg-mainGradient text-white'
            : 'bg-transparen'
        "
      >
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.65 2.93996L6.93 9.01996C6.52 9.67996 7 10.54 7.78 10.54H15.21C15.99 10.54 16.47 9.67996 16.06 9.01996L12.35 2.93996C11.96 2.29996 11.04 2.29996 10.65 2.93996Z"
              class="group-hover:fill-white"
              :class="
                activeDropdown == 'service-category'
                  ? 'fill-white'
                  : 'fill-black-900'
              "
            />
            <path
              d="M17 21.54C19.4853 21.54 21.5 19.5252 21.5 17.04C21.5 14.5547 19.4853 12.54 17 12.54C14.5147 12.54 12.5 14.5547 12.5 17.04C12.5 19.5252 14.5147 21.54 17 21.54Z"
              class="group-hover:fill-white"
              :class="
                activeDropdown == 'service-category'
                  ? 'fill-white'
                  : 'fill-black-900'
              "
            />
            <path
              d="M3.5 21.04H9.5C10.05 21.04 10.5 20.59 10.5 20.04V14.04C10.5 13.49 10.05 13.04 9.5 13.04H3.5C2.95 13.04 2.5 13.49 2.5 14.04V20.04C2.5 20.59 2.95 21.04 3.5 21.04Z"
              class="group-hover:fill-white"
              :class="
                activeDropdown == 'service-category'
                  ? 'fill-white'
                  : 'fill-black-900'
              "
            />
          </svg>

          <span class="shrink-0 whitespace-nowrap">Service Category</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          class="group-hover:fill-white duration-200"
          :class="
            activeDropdown == 'service-category'
              ? 'fill-white -rotate-180'
              : 'fill-black-900 -rotate-0'
          "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8333 5.8335L17.0118 7.01201L9.75592 14.2679L2.5 7.01201L3.67851 5.8335L9.75592 11.9109L15.8333 5.8335Z"
            class="group-hover:fill-white duration-200"
            :class="
              activeDropdown == 'service-category'
                ? 'fill-white'
                : 'fill-black-900'
            "
          />
        </svg>
      </div>
      <!-- sub menus -->
      <div
        ref="submenuRef"
        class="duration-200"
        :style="{
          maxHeight:
            activeDropdown == 'service-category'
              ? this.submenuRef?.scrollHeight + 'px'
              : '0',
        }"
      >
        <div class="flex flex-col gap-1 font-poppins">
          <router-link
            to="/"
            @click="handleToggleDropdown('service-category', true)"
            class="shirnk-0 text-black-900 hover:text-green-600 py-3 pl-14 pr-6 text-sm "
          >
            Category
          </router-link>
          <router-link
            to="/"
            @click="handleToggleDropdown('service-category', true)"
            class="shirnk-0 text-black-900 hover:text-green-600 py-3 pl-14 pr-6 text-sm"
          >
            Sub Category
          </router-link>
        </div>
      </div>
    </div>

    <div class="my-5"></div>

    <!-- withdraw request -->

    <div class="overflow-hidden">
      <!-- service -->
      <div
        class="rounded-lg flex items-center justify-between gap-2 max-w-max group w-full py-4 px-6 hover:bg-green-400 duration-200 hover:text-white cursor-pointer"
        @click="handleToggleDropdown('withdraw-request', false)"
        :class="
          activeDropdown == 'withdraw-request'
            ? 'bg-mainGradient text-white'
            : 'bg-transparen'
        "
      >
        <div class="flex items-center gap-2">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM11 10H8V11H11C11.55 11 12 11.45 12 12V15C12 15.55 11.55 16 11 16H10C10 16.55 9.55 17 9 17C8.45 17 8 16.55 8 16H7C6.45 16 6 15.55 6 15C6 14.45 6.45 14 7 14H10V13H7C6.45 13 6 12.55 6 12V9C6 8.45 6.45 8 7 8H8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8H11C11.55 8 12 8.45 12 9C12 9.55 11.55 10 11 10ZM15.65 15.9L14 14.25H18L16.35 15.9C16.16 16.09 15.84 16.09 15.65 15.9ZM14 10L15.65 8.35C15.85 8.15 16.16 8.15 16.36 8.35L18 10H14Z"
              class="group-hover:fill-white "
               :class="
          activeDropdown == 'withdraw-request'
            ? 'fill-white'
            : 'fill-black-900'
        "
            />
          </svg>

          <span class="shrink-0 whitespace-nowrap">withdraw request</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          class="group-hover:fill-white duration-200"
          :class="
            activeDropdown == 'withdraw-request'
              ? 'fill-white -rotate-180'
              : 'fill-black-900 -rotate-0'
          "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8333 5.8335L17.0118 7.01201L9.75592 14.2679L2.5 7.01201L3.67851 5.8335L9.75592 11.9109L15.8333 5.8335Z"
            class="group-hover:fill-white duration-200"
            :class="
              activeDropdown == 'withdraw-request'
                ? 'fill-white'
                : 'fill-black-900'
            "
          />
        </svg>
      </div>
      <!-- sub menus -->
      <div
        ref="submenuRef"
        class="duration-200"
        :style="{
          maxHeight:
            activeDropdown == 'withdraw-request'
              ? this.submenuRef?.scrollHeight + 'px'
              : '0',
        }"
      >
        <div class="flex flex-col gap-1 font-poppins">
          <router-link
            to="/"
            @click="handleToggleDropdown('withdraw-request', true)"
            class="shirnk-0 text-black-900 hover:text-green-600 py-3 pl-14 pr-6 text-sm "
            
          >
            Category
          </router-link>
          <router-link
            to="/"
            @click="handleToggleDropdown('withdraw-request', true)"
            class="shirnk-0 text-black-900 hover:text-green-600 py-3 pl-14 pr-6 text-sm"
          >
            Sub Category
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeDropdown: "",
    };
  },
  // watch: {
  //   "$route.name"(newValue) {
  //     this.activePath = getActivePath(newValue);
  //     this.routePath = newValue;
  //   },
  // },

  mounted() {
    this.submenuRef = this.$refs.submenuRef;
    // this.activePath = getActivePath(this.$route.name);
    // this.routePath = this.$route.name;
  },
  methods: {
    handleToggleDropdown(value, submenu) {
      if (value === this.activeDropdown && !submenu) {
        this.activeDropdown = "";
      } else {
        this.activeDropdown = value;
      }
    },
  },
};
</script>

<style scoped></style>
