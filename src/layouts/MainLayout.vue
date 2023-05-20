<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-avatar
          class="mb-4"
          size="64"
          image="https://randomuser.me/api/portraits/men/85.jpg"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list density="compact" nav v-for="item in items" :key="item">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.route"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="purple-lighten-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon icon="mdi mdi-van-utility" start></v-icon>Ship-IT (Business)
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Dashboards",
          icon: "mdi mdi-monitor-dashboard",
          route: "/dashboards",
        },
        {
          title: "Categories",
          icon: "mdi mdi-format-list-numbered",
          route: "/categories",
        },
        {
          title: "Products",
          icon: "mdi mdi-list-box-outline",
          route: "/product-list",
        },
        {
          title: "Orders Tracking",
          icon: "mdi mdi-access-point",
          route: "/orders-tracking",
        },
      ],
    };
  },
};
</script>
