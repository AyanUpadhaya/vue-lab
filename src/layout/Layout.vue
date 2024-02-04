<template>
  <div class="w-full h-screen overflow-hidden">
    <div class="flex items-start h-full">
      <Sidebar :activeLink="activeLink" :setActive="setActive" :showSidebar="showSidebar"></Sidebar>

      <div class="h-full flex-1 w-full overflow-hidden">
        <Navbar :setShowSidebar="setShowSidebar"></Navbar>
        <div class="h-[calc(100vh-100px)] p-3 overflow-y-auto">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/shared/Navbar.vue";
import Sidebar from "../components/shared/Sidebar.vue";

export default {
  data() {
    return {
      activeLink: "",
      showSidebar:true,
    };
  },
  beforeRouteEnter(to, from, next) {
    const activeLink = localStorage.getItem("activepath") || "";
    next((vm) => vm.redirect(activeLink));
  },
  methods: {
    setActive(value) {
      this.activeLink = value;
      localStorage.setItem("activepath", value);
    },
    getActivePath() {
      const path = localStorage.getItem("activepath");
      this.activeLink = path || "";
    },
    beforeRouteEnter(to, from, next) {
      const activeLink = localStorage.getItem("activepath") || "";
      next((vm) => vm.redirect(activeLink));
    },
    redirect(activeLink) {
      if (activeLink !== "") {
        this.$router.push({ path: `/${activeLink}` });
      }
    },
    setShowSidebar() {
      this.showSidebar = !this.showSidebar
    }
  },
  mounted() {
    this.getActivePath();
    this.redirect(this.activeLink);
  },
  components: { Sidebar, Navbar },
};
</script>
