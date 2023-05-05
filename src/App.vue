<template>
  <v-app id="inspire">
    <Toolbar />
    <SideBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./layouts/Toolbar.vue";
import SideBar from "./layouts/SideBar.vue";

export default {
  name: "App",

  components: { Toolbar, SideBar },
};
</script>
