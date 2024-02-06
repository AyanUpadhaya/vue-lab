<template>
    <div>

         <!-- <button
            type="button"
            class="text-base px-10 py-3 text-white w-full max-w-[256px]"
            :class="isValid ? 'btn-primary shadow-btn' : 'btn-cancel '"
            :disabled="isValid ? false : true"
            @click="handleSubmit"
          >
            Save
          </button> -->

    <!-- <path
                    d="M17 2.49121H7C4 2.49121 2 4.49121 2 7.49121V13.4912C2 16.4912 4 18.4912 7 18.4912V20.6212C7 21.4212 7.89 21.9012 8.55 21.4512L13 18.4912H17C20 18.4912 22 16.4912 22 13.4912V7.49121C22 4.49121 20 2.49121 17 2.49121ZM12 14.6612C11.58 14.6612 11.25 14.3212 11.25 13.9112C11.25 13.5012 11.58 13.1612 12 13.1612C12.42 13.1612 12.75 13.5012 12.75 13.9112C12.75 14.3212 12.42 14.6612 12 14.6612ZM13.26 10.5112C12.87 10.7712 12.75 10.9412 12.75 11.2212V11.4312C12.75 11.8412 12.41 12.1812 12 12.1812C11.59 12.1812 11.25 11.8412 11.25 11.4312V11.2212C11.25 10.0612 12.1 9.49121 12.42 9.27121C12.79 9.02121 12.91 8.85121 12.91 8.59121C12.91 8.09121 12.5 7.68121 12 7.68121C11.5 7.68121 11.09 8.09121 11.09 8.59121C11.09 9.00121 10.75 9.34121 10.34 9.34121C9.93 9.34121 9.59 9.00121 9.59 8.59121C9.59 7.26121 10.67 6.18121 12 6.18121C13.33 6.18121 14.41 7.26121 14.41 8.59121C14.41 9.73121 13.57 10.3012 13.26 10.5112Z"
                    fill="#AAAAAA"
                    class="group-hover:fill-primaryPure duration-200"
                    :class="
                      activePath === 'help-support'
                        ? 'fill-primaryPure'
                        : 'fill-blackLight'
                    "
                  /> -->

    <!-- :class="routePath === 'contact-us' ? 'text-primaryPure' : ''" -->

    <div>
      <h2>Working with links</h2>
      <textarea class="w-full">
        <div class="whitespace-nowrap">
            <router-link
              :to="{ name: 'dashboard' }"
              class="flex items-center gap-4 group w-full py-3 px-4 hover:bg-secondaryLight duration-200 hover:text-primaryPure"
              :class="
                activePath === 'dashboard'
                  ? 'bg-secondaryLight text-primaryPure'
                  : 'bg-transparent '
              "
              @click="handleToggleDropdown('dashboard', false)"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="shrink-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.54 2.06134H7.92C9.33 2.06134 10.46 3.21134 10.46 4.62234V8.03134C10.46 9.45134 9.33 10.5913 7.92 10.5913H4.54C3.14 10.5913 2 9.45134 2 8.03134V4.62234C2 3.21134 3.14 2.06134 4.54 2.06134ZM4.54 13.531H7.92C9.33 13.531 10.46 14.672 10.46 16.092V19.501C10.46 20.911 9.33 22.061 7.92 22.061H4.54C3.14 22.061 2 20.911 2 19.501V16.092C2 14.672 3.14 13.531 4.54 13.531ZM19.4601 2.06134H16.0801C14.6701 2.06134 13.5401 3.21134 13.5401 4.62234V8.03134C13.5401 9.45134 14.6701 10.5913 16.0801 10.5913H19.4601C20.8601 10.5913 22.0001 9.45134 22.0001 8.03134V4.62234C22.0001 3.21134 20.8601 2.06134 19.4601 2.06134ZM16.0801 13.531H19.4601C20.8601 13.531 22.0001 14.672 22.0001 16.092V19.501C22.0001 20.911 20.8601 22.061 19.4601 22.061H16.0801C14.6701 22.061 13.5401 20.911 13.5401 19.501V16.092C13.5401 14.672 14.6701 13.531 16.0801 13.531Z"
                  class="group-hover:fill-primaryPure duration-200"
                  :class="
                    activePath === 'dashboard'
                      ? 'fill-primaryPure'
                      : 'fill-blackLight'
                  "
                />
              </svg>

              <span class="shirnk-0">Dashboard</span>
            </router-link>
          </div>
      </textarea>
    </div>
    <div>
      <h2>Working with drop down</h2>
      <textarea class="w-full">
         <!-- Help & Support  -->
         <div class="overflow-hidden">
            <!-- Help & Support  -->
            <div
              class="flex items-center justify-between gap-4 group w-full py-3 px-4 hover:bg-secondaryLight duration-200 hover:text-primaryPure cursor-pointer"
              :class="
                activePath === 'help-support'
                  ? 'bg-secondaryLight text-primaryPure'
                  : 'bg-transparent '
              "
              @click="handleToggleDropdown('help-support', false)"
            >
              <div class="flex items-center gap-4">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="shrink-0"
                >
                  <path
                    d="M17 2.49121H7C4 2.49121 2 4.49121 2 7.49121V13.4912C2 16.4912 4 18.4912 7 18.4912V20.6212C7 21.4212 7.89 21.9012 8.55 21.4512L13 18.4912H17C20 18.4912 22 16.4912 22 13.4912V7.49121C22 4.49121 20 2.49121 17 2.49121ZM12 14.6612C11.58 14.6612 11.25 14.3212 11.25 13.9112C11.25 13.5012 11.58 13.1612 12 13.1612C12.42 13.1612 12.75 13.5012 12.75 13.9112C12.75 14.3212 12.42 14.6612 12 14.6612ZM13.26 10.5112C12.87 10.7712 12.75 10.9412 12.75 11.2212V11.4312C12.75 11.8412 12.41 12.1812 12 12.1812C11.59 12.1812 11.25 11.8412 11.25 11.4312V11.2212C11.25 10.0612 12.1 9.49121 12.42 9.27121C12.79 9.02121 12.91 8.85121 12.91 8.59121C12.91 8.09121 12.5 7.68121 12 7.68121C11.5 7.68121 11.09 8.09121 11.09 8.59121C11.09 9.00121 10.75 9.34121 10.34 9.34121C9.93 9.34121 9.59 9.00121 9.59 8.59121C9.59 7.26121 10.67 6.18121 12 6.18121C13.33 6.18121 14.41 7.26121 14.41 8.59121C14.41 9.73121 13.57 10.3012 13.26 10.5112Z"
                    fill="#AAAAAA"
                    class="group-hover:fill-primaryPure duration-200"
                    :class="
                      activePath === 'help-support'
                        ? 'fill-primaryPure'
                        : 'fill-blackLight'
                    "
                  />
                </svg>

                <span class="shrink-0 whitespace-nowrap">Help & Support</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                class="duration-300"
                :class="
                  activeDropdown === 'help-support' ? '-rotate-90' : 'rotate-0 '
                "
              >
                <path
                  d="M5.9668 2.78131L10.3135 7.12798C10.8268 7.64131 10.8268 8.48131 10.3135 8.99464L5.9668 13.3413"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-primaryPure duration-200"
                  :class="
                    activePath === 'help-support'
                      ? 'stroke-primaryPure'
                      : 'stroke-blackLight'
                  "
                />
              </svg>
            </div>
            <!-- sub menus  -->
            <div
              ref="submenuRef"
              class="duration-200"
              :style="{
                maxHeight:
                  activeDropdown == 'help-support'
                    ? this.submenuRef?.scrollHeight + 'px'
                    : '0',
              }"
            >
              <div class="flex flex-col gap-4 pt-4 pl-10 pr-2 text-xs">
                <router-link
                  :to="{ name: 'knowledge' }"
                  @click="handleToggleDropdown('help-support', true)"
                  class="shirnk-0 hover:text-primaryPure"
                  :class="routePath === 'knowledge' ? 'text-primaryPure' : ''"
                >
                  Knowledge Base
                </router-link>
                <router-link
                  :to="{ name: 'contact-us' }"
                  @click="handleToggleDropdown('help-support', true)"
                  class="shirnk-0 hover:text-primaryPure"
                  :class="routePath === 'contact-us' ? 'text-primaryPure' : ''"
                >
                  Contact Us
                </router-link>
                <router-link
                  :to="{ name: 'problem-report' }"
                  @click="handleToggleDropdown('help-support', true)"
                  class="shirnk-0 hover:text-primaryPure"
                  :class="
                    routePath === 'problem-report' ? 'text-primaryPure' : ''
                  "
                >
                  Report a Problem
                </router-link>
              </div>
            </div>
          </div>
      </textarea>
    </div>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>