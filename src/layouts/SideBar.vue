<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider />

    <v-list density="compact" nav v-for="item in items" :key="item">
      <v-list-item
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :to="item.route"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Dashboards",
          value: "dashboards",
          icon: "mdi mdi-monitor-dashboard",
          route: "/dashboards",
        },
        {
          title: "Categories",
          value: "categories",
          icon: "mdi mdi-format-list-numbered",
          route: "/categories",
        },
        {
          title: "Add Category",
          value: "add category",
          icon: "mdi mdi-plus",
          route: "/add-category",
        },
        {
          title: "Products",
          value: "products",
          icon: "mdi mdi-list-box-outline",
          route: "/product-list",
        },
        {
          title: "Add Product",
          value: "add product",
          icon: "mdi mdi-plus",
          route: "/add-product",
        },
        {
          title: "Orders Tracking",
          value: "orders tracking",
          icon: "mdi mdi-access-point",
          route: "/orders-tracking",
        },
      ],
      rail: true,
    };
  },
};
</script>
