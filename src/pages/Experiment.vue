<template>
  <section class="relative sidebar hidden md:block">
    <div
      class="h-screen p-4 overflow-auto overflow-x-hidden shrink-0 pb-10 relative z-10 duration-300 flex flex-col justify-between select-none"
      :class="isShowSidebar ? 'w-[272px]' : 'w-20'"
    >
      <div class="flex flex-col gap-1">
 
        <div class="flex flex-col gap-2 font-semibold text-blackLight ">
          <!-- dashboard  -->
          <div class="whitespace-nowrap">
            <router-link
              :to="{ name: 'dashboard' }"
              class="flex items-center gap-4 group w-full py-4 px-6 text-black-900 hover:bg-green-400 duration-200 hover:text-white rounded-lg"
              :class="
                activePath === 'dashboard'
                  ? 'bg-mainGradient text-white'
                  : 'bg-transparent '
              "
              @click="handleToggleDropdown('dashboard', false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 11H9C10.1 11 11 10.1 11 9V5C11 3.9 10.1 3 9 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'dashboard' ? 'fill-white' : 'fill-black-900'
                  "
                />
                <path
                  d="M5 21H9C10.1 21 11 20.1 11 19V15C11 13.9 10.1 13 9 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'dashboard' ? 'fill-white' : 'fill-black-900'
                  "
                />
                <path
                  d="M13 5V9C13 10.1 13.9 11 15 11H19C20.1 11 21 10.1 21 9V5C21 3.9 20.1 3 19 3H15C13.9 3 13 3.9 13 5Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'dashboard' ? 'fill-white' : 'fill-black-900'
                  "
                />
                <path
                  d="M15 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13H15C13.9 13 13 13.9 13 15V19C13 20.1 13.9 21 15 21Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'dashboard' ? 'fill-white' : 'fill-black-900'
                  "
                />
              </svg>

              <span
                class="shirnk-0 duration-200"
                :class="
                  isShowSidebar ? 'block' : 'hidden'
                "
                >Dashboard</span
              >
            </router-link>
          </div>
          <!-- service -->
          <div class="overflow-hidden">
            <!-- service -->
            <div
              class="rounded-lg flex items-center justify-between gap-2 group w-full py-4 px-6 hover:bg-green-400 duration-200 hover:text-white cursor-pointer"
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
              ref="serviceRef"
              class="duration-200"
              :style="{
                maxHeight:
                  activeDropdown == 'service-category'
                    ? this.serviceRef?.scrollHeight + 'px'
                    : '0',
              }"
            >
              <div class="flex flex-col gap-1 font-poppins">
                <router-link
                  to="/"
                  @click="handleToggleDropdown('service-category', true)"
                  class="shirnk-0 text-black-900 hover:text-green-600 py-3 pl-14 pr-6 text-sm"
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
          <!-- Agents  -->
          <div class="whitespace-nowrap">
            <router-link
              :to="{ name: 'agents' }"
              class="flex items-center gap-4 group w-full py-4 px-6 text-black-900 hover:bg-green-400 duration-200 hover:text-white rounded-lg"
              :class="
                activePath === 'agents'
                  ? 'bg-mainGradient text-white'
                  : 'bg-transparent '
              "
              @click="handleToggleDropdown('agents', false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.4285 15.8846C13.3609 15.8554 13.3032 15.8071 13.2627 15.7456C13.2222 15.684 13.2006 15.612 13.2006 15.5383C13.2001 15.4856 13.2105 15.4335 13.231 15.385C13.2515 15.3365 13.2818 15.2927 13.32 15.2565C13.3432 15.2343 13.3655 15.2124 13.3822 15.1948C13.5003 15.0705 13.6044 14.9337 13.6928 14.7869C13.9253 14.3988 14.0406 13.9518 14.0247 13.4997C14.0088 13.0477 13.8624 12.6098 13.6032 12.2391C13.344 11.8684 12.9831 11.5806 12.5639 11.4104C12.1448 11.2403 11.6854 11.195 11.2411 11.2802C10.7884 11.3595 10.3699 11.5731 10.0403 11.8934C9.7106 12.2137 9.48492 12.6257 9.39257 13.076C9.30721 13.4636 9.32174 13.8667 9.43478 14.2472C9.54782 14.6277 9.75568 14.9733 10.0388 15.2515C10.0773 15.288 10.108 15.3317 10.1293 15.3802C10.1506 15.4287 10.162 15.4809 10.1628 15.5338V15.5358C10.1635 15.6101 10.1422 15.6829 10.1017 15.7452C10.0611 15.8074 10.0031 15.8563 9.93489 15.8857C9.00103 16.2725 8.25634 17.0105 7.86101 17.9408C7.58309 18.5779 7.44368 19.2668 7.45201 19.9618V20.4626C7.45201 20.57 7.47317 20.6764 7.51428 20.7756C7.55539 20.8748 7.61564 20.9649 7.69159 21.0409C7.76755 21.1168 7.85772 21.177 7.95695 21.2181C8.05619 21.2592 8.16254 21.2803 8.26994 21.2803H15.0955C15.3123 21.2803 15.5202 21.1941 15.6735 21.0408C15.8269 20.8875 15.913 20.6795 15.913 20.4627V19.9568C15.9213 19.2621 15.7817 18.5735 15.5033 17.9369C15.1073 17.0074 14.3623 16.2705 13.4285 15.8846Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'agents' ? 'fill-white' : 'fill-black-900'
                  "
                />
                <path
                  d="M9.00506 15.3817C8.69788 15.1195 8.3508 14.9079 7.97692 14.7551C7.90925 14.7259 7.8516 14.6776 7.81109 14.6161C7.77058 14.5545 7.74899 14.4825 7.74898 14.4088C7.74851 14.3561 7.75888 14.3039 7.77943 14.2554C7.79997 14.207 7.83027 14.1632 7.86844 14.1269C7.89162 14.1047 7.91396 14.0829 7.93066 14.0653C8.04868 13.941 8.15281 13.8043 8.24119 13.6575C8.47376 13.2695 8.58906 12.8225 8.57319 12.3704C8.55731 11.9183 8.41094 11.4805 8.15174 11.1097C7.89254 10.739 7.53158 10.4511 7.11243 10.281C6.69327 10.1108 6.23383 10.0656 5.78955 10.1508C5.33681 10.2301 4.91839 10.4437 4.58871 10.764C4.25903 11.0843 4.03334 11.4963 3.941 11.9466C3.85566 12.3343 3.8702 12.7373 3.98323 13.1178C4.09627 13.4983 4.3041 13.8439 4.58724 14.1222C4.62568 14.1586 4.65645 14.2023 4.67775 14.2508C4.69904 14.2992 4.71042 14.3515 4.71123 14.4044V14.4064C4.71193 14.4807 4.69067 14.5536 4.65012 14.6158C4.60957 14.6781 4.55153 14.727 4.48329 14.7564C3.54945 15.1432 2.80476 15.8811 2.40941 16.8114C2.13148 17.4485 1.99205 18.1374 2.00035 18.8324V19.3335C2.00035 19.4408 2.02149 19.5471 2.06257 19.6463C2.10366 19.7455 2.16388 19.8356 2.23979 19.9116C2.31571 19.9875 2.40584 20.0477 2.50503 20.0888C2.60422 20.1299 2.71053 20.151 2.8179 20.151H6.58536V19.9618C6.576 19.1438 6.74157 18.3332 7.07099 17.5843C7.46631 16.6639 8.1435 15.8927 9.00506 15.3817Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'agents' ? 'fill-white' : 'fill-black-900'
                  "
                />
                <path
                  d="M20.9543 16.8073C20.5583 15.8779 19.8134 15.141 18.8798 14.7551C18.8121 14.7259 18.7545 14.6776 18.714 14.6161C18.6734 14.5545 18.6519 14.4825 18.6518 14.4088C18.6514 14.3561 18.6617 14.3039 18.6823 14.2555C18.7028 14.207 18.7331 14.1632 18.7712 14.1269C18.7945 14.1047 18.8169 14.0829 18.8335 14.0652C18.9515 13.9411 19.0557 13.8043 19.1441 13.6575C19.3766 13.2695 19.4919 12.8225 19.476 12.3704C19.4602 11.9183 19.3138 11.4805 19.0546 11.1097C18.7954 10.739 18.4344 10.4511 18.0153 10.281C17.5961 10.1108 17.1367 10.0656 16.6924 10.1508C16.2397 10.2301 15.8212 10.4437 15.4916 10.764C15.1619 11.0843 14.9362 11.4963 14.8439 11.9466C14.7585 12.3343 14.773 12.7373 14.8861 13.1178C14.9991 13.4984 15.2069 13.8439 15.4901 14.1222C15.5285 14.1586 15.5593 14.2023 15.5806 14.2508C15.6019 14.2992 15.6133 14.3515 15.6141 14.4044V14.4064C15.6148 14.4807 15.5935 14.5536 15.553 14.6158C15.5124 14.6781 15.4544 14.727 15.3862 14.7564C15.0132 14.9091 14.6669 15.1203 14.3604 15.382C15.2205 15.892 15.897 16.6614 16.2926 17.5797C16.6228 18.3283 16.7887 19.1389 16.7793 19.957V20.151H20.5465C20.7633 20.151 20.9712 20.0649 21.1246 19.9115C21.2779 19.7582 21.3641 19.5503 21.3641 19.3334V18.8273C21.3724 18.1325 21.2327 17.444 20.9543 16.8073Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'agents' ? 'fill-white' : 'fill-black-900'
                  "
                />
                <path
                  d="M7.67755 6.83873L8.45843 6.98528C8.53157 6.99844 8.59998 7.03057 8.65681 7.07846C8.71364 7.12635 8.75691 7.18831 8.78229 7.25816C8.81792 7.3592 8.85887 7.4583 8.90496 7.55502C8.93628 7.6223 8.94942 7.69663 8.94307 7.77058C8.93672 7.84452 8.91109 7.91552 8.86874 7.97647L8.42036 8.63196C8.38396 8.68512 8.3673 8.74935 8.37327 8.8135C8.37924 8.87765 8.40746 8.9377 8.45304 8.98324L8.92955 9.45978C8.97509 9.50537 9.03514 9.53359 9.0993 9.53956C9.16346 9.54553 9.22769 9.52887 9.28086 9.49246L9.93631 9.04407C9.99727 9.00173 10.0683 8.9761 10.1422 8.96975C10.2162 8.9634 10.2905 8.97655 10.3578 9.00789C10.4545 9.05394 10.5536 9.09487 10.6547 9.13053C10.7245 9.15588 10.7865 9.19915 10.8344 9.25598C10.8823 9.31282 10.9144 9.38123 10.9275 9.45439L11.0741 10.2353C11.0859 10.2986 11.1196 10.3558 11.1692 10.3969C11.2187 10.4381 11.2812 10.4606 11.3456 10.4606H12.0197C12.0841 10.4606 12.1465 10.4381 12.1961 10.397C12.2457 10.3558 12.2793 10.2986 12.2912 10.2353L12.4377 9.45439C12.4509 9.38124 12.483 9.31283 12.5309 9.25599C12.5788 9.19916 12.6408 9.1559 12.7106 9.13053C12.8117 9.09487 12.9108 9.05392 13.0075 9.00786C13.0748 8.97653 13.1491 8.96339 13.2231 8.96974C13.297 8.9761 13.368 9.00173 13.4289 9.04407L14.0844 9.49246C14.1376 9.52884 14.2018 9.54549 14.266 9.53952C14.3302 9.53355 14.3902 9.50534 14.4358 9.45978L14.9122 8.9833C14.9578 8.93776 14.986 8.87772 14.9919 8.81356C14.9979 8.74941 14.9813 8.68519 14.9449 8.63202L14.4965 7.97654C14.4541 7.91559 14.4285 7.8446 14.4221 7.77066C14.4158 7.69671 14.4289 7.6224 14.4603 7.55511C14.5063 7.45838 14.5473 7.35928 14.5829 7.25822C14.6083 7.18837 14.6516 7.12641 14.7084 7.07852C14.7652 7.03064 14.8336 6.99851 14.9068 6.98534L15.6876 6.83879C15.751 6.82694 15.8082 6.79332 15.8493 6.74373C15.8905 6.69415 15.913 6.63173 15.913 6.56729V5.89334C15.913 5.82891 15.8905 5.76649 15.8493 5.7169C15.8082 5.66732 15.751 5.63369 15.6876 5.62185L14.9068 5.47532C14.8336 5.46216 14.7652 5.43003 14.7084 5.38214C14.6516 5.33426 14.6083 5.27229 14.5829 5.20245C14.5473 5.10139 14.5064 5.00228 14.4603 4.90555C14.4289 4.83827 14.4158 4.76394 14.4222 4.69C14.4285 4.61605 14.4541 4.54506 14.4965 4.4841L14.9449 3.82861C14.9813 3.77544 14.998 3.7112 14.992 3.64702C14.986 3.58285 14.9578 3.52278 14.9122 3.47724L14.4357 3.00076C14.3901 2.95516 14.3301 2.92692 14.2659 2.92095C14.2017 2.91499 14.1375 2.93166 14.0843 2.96808L13.4288 3.41647C13.3679 3.45881 13.2969 3.48444 13.2229 3.49079C13.149 3.49714 13.0747 3.48399 13.0074 3.45265C12.9106 3.40659 12.8115 3.36566 12.7105 3.33001C12.6406 3.30464 12.5787 3.26138 12.5308 3.20454C12.4829 3.14771 12.4508 3.0793 12.4376 3.00615L12.2911 2.22521C12.2792 2.16192 12.2455 2.10479 12.196 2.06367C12.1464 2.02255 12.0841 2.00003 12.0197 2H11.3455C11.2811 1.99997 11.2187 2.02247 11.1691 2.06362C11.1195 2.10476 11.0859 2.16194 11.074 2.22527L10.9275 3.00622C10.9143 3.07936 10.8822 3.14776 10.8343 3.20459C10.7864 3.26142 10.7245 3.30469 10.6546 3.33008C10.5536 3.3657 10.4545 3.40664 10.3577 3.45271C10.2905 3.48405 10.2161 3.4972 10.1422 3.49085C10.0682 3.4845 9.99724 3.45888 9.93628 3.41653L9.28086 2.96808C9.2277 2.93167 9.16347 2.91499 9.09931 2.92095C9.03515 2.92691 8.9751 2.95512 8.92955 3.0007L8.45297 3.47721C8.40738 3.52275 8.37915 3.58281 8.37318 3.64698C8.36721 3.71114 8.38388 3.77538 8.42029 3.82855L8.86868 4.48404C8.91103 4.54499 8.93665 4.61598 8.94301 4.68993C8.94936 4.76388 8.93622 4.8382 8.90489 4.90549C8.8588 5.00222 8.81785 5.10132 8.78223 5.20238C8.75685 5.27224 8.71359 5.3342 8.65675 5.38209C8.59992 5.42998 8.53151 5.46211 8.45837 5.47526L7.67748 5.62181C7.61416 5.63369 7.55698 5.66733 7.51583 5.71691C7.47469 5.76649 7.45216 5.82888 7.45215 5.89331V6.5672C7.45212 6.63165 7.47464 6.69408 7.5158 6.74367C7.55697 6.79327 7.61419 6.82689 7.67755 6.83873ZM11.6826 4.66234C11.9927 4.66234 12.2958 4.75429 12.5537 4.92658C12.8115 5.09886 13.0125 5.34374 13.1312 5.63024C13.2498 5.91674 13.2809 6.232 13.2204 6.53615C13.1599 6.84029 13.0106 7.11967 12.7913 7.33895C12.572 7.55823 12.2926 7.70757 11.9885 7.76807C11.6843 7.82857 11.3691 7.79753 11.0826 7.67886C10.7961 7.56019 10.5512 7.35923 10.3789 7.10139C10.2066 6.84355 10.1147 6.54041 10.1146 6.2303C10.1147 5.81446 10.2798 5.41565 10.5739 5.1216C10.8679 4.82756 11.2667 4.66235 11.6826 4.66234Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'agents' ? 'fill-white' : 'fill-black-900'
                  "
                />
              </svg>

              <span
                class="shirnk-0 duration-200"
                :class="
                  isShowSidebar ? 'block' : 'hidden'
                "
                >Agents</span
              >
            </router-link>
          </div>
          <!-- users  -->
          <div class="whitespace-nowrap">
            <router-link
              :to="{ name: 'our-users' }"
              class="flex items-center gap-4 group w-full py-4 px-6 text-black-900 hover:bg-green-400 duration-200 hover:text-white rounded-lg"
              :class="
                activePath === 'our-users'
                  ? 'bg-mainGradient text-white'
                  : 'bg-transparent '
              "
              @click="handleToggleDropdown('our-users', false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'our-users' ? 'fill-white' : 'fill-black-900'
                  "
                />
              </svg>

              <span
                class="shirnk-0 duration-200"
                :class="
                  isShowSidebar ? 'block' : 'hidden'
                "
                >Our Users</span
              >
            </router-link>
          </div>
          <!-- Businesses  -->
          <div class="whitespace-nowrap">
            <router-link
              :to="{ name: 'businesses' }"
              class="flex items-center gap-4 group w-full py-4 px-6 text-black-900 hover:bg-green-400 duration-200 hover:text-white rounded-lg"
              :class="
                activePath === 'businesses'
                  ? 'bg-mainGradient text-white'
                  : 'bg-transparent '
              "
              @click="handleToggleDropdown('businesses', false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 7V5C12 3.9 11.1 3 10 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM19 19H12V17H14V15H12V13H14V11H12V9H19C19.55 9 20 9.45 20 10V18C20 18.55 19.55 19 19 19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
                  class="group-hover:fill-white duration-200"
                  :class="
                    activePath === 'businesses'
                      ? 'fill-white'
                      : 'fill-black-900'
                  "
                />
              </svg>

              <span
                class="shirnk-0 duration-200"
                :class="
                  isShowSidebar ? 'block' : 'hidden'
                "
                >Businesses</span
              >
            </router-link>
          </div>
          <!-- withdraw request -->

          <div class="overflow-hidden">
            <!-- withdraw-request -->
            <div
              class="rounded-lg flex items-center justify-between gap-2 group w-full py-4 px-6 hover:bg-green-400 duration-200 hover:text-white cursor-pointer"
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
                    class="group-hover:fill-white"
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
              ref="withDrawRef"
              class="duration-200"
              :style="{
                maxHeight:
                  activeDropdown == 'withdraw-request'
                    ? this.withDrawRef?.scrollHeight + 'px'
                    : '0',
              }"
            >
              <div class="flex flex-col gap-1 font-poppins">
                <router-link
                  to="/"
                  @click="handleToggleDropdown('withdraw-request', true)"
                  class="shirnk-0 text-black-900 hover:text-green-600 py-3 pl-14 pr-6 text-sm"
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

          <!-- log out  -->
          <div class="whitespace-nowrap">
            <div
              class="flex items-center gap-4 group w-full py-4 px-6 text-black-900  rounded-lg"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5.10449 5H11.1045C11.6545 5 12.1045 4.55 12.1045 4C12.1045 3.45 11.6545 3 11.1045 3H5.10449C4.00449 3 3.10449 3.9 3.10449 5V19C3.10449 20.1 4.00449 21 5.10449 21H11.1045C11.6545 21 12.1045 20.55 12.1045 20C12.1045 19.45 11.6545 19 11.1045 19H5.10449V5Z" fill="#212121"/>
  <path d="M20.7545 11.65L17.9645 8.86C17.6445 8.54 17.1045 8.76 17.1045 9.21V11H10.1045C9.55449 11 9.10449 11.45 9.10449 12C9.10449 12.55 9.55449 13 10.1045 13H17.1045V14.79C17.1045 15.24 17.6445 15.46 17.9545 15.14L20.7445 12.35C20.9445 12.16 20.9445 11.84 20.7545 11.65Z" fill="#212121"/>
</svg>

              <span
                class="shirnk-0 duration-200"
                :class="
                  isShowSidebar ? 'block' : 'hidden'
                "
                >Log Out</span
              >
            </div>
          </div>
        </div>
      
    </div>
    </div>
  </section>
</template>

<script>
import { getActivePath, getActiveRoutePath } from "../utils/getActivePath.js";
export default {
  data() {
    return {
      routePath: "dashboard",
      activePath: "dashboard",
      activeDropdown: "",
      isShowSidebar: true,
    };
  },
  watch: {
    "$route.name"(newValue) {
      this.activePath = getActivePath(newValue);
      this.routePath = getActiveRoutePath(newValue);
    },
  },
  mounted() {
    this.serviceRef = this.$refs.serviceRef;
    this.withDrawRef = this.$refs.withDrawRef;
    this.activePath = getActivePath(this.$route.name);
    this.routePath = getActiveRoutePath(this.$route.name);
  },
  methods: {
    handleToggleDropdown(value, submenu) {
      if (value === this.activeDropdown && !submenu) {
        this.activeDropdown = "";
      } else {
        this.activeDropdown = value;
      }
    },

    toggleSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    },
  },
};
</script>

<style>
.sidebar ::-webkit-scrollbar {
  width: 0;
}

*.sidebar {
  scrollbar-width: 0;
}
</style>
