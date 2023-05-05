// Composables
import { createRouter, createWebHistory } from "vue-router";

import Dashboards from "../views/Dashboards.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboards",
  },
  {
    path: "/dashboards",
    name: "Dashboards",
    component: Dashboards,
  },
  {
    path: "/categories",
    name: "CategoryList",
    component: () => import("../components/categories/CategoriesList.vue"),
  },
  {
    path: "/add-category",
    name: "AddCategory",
    component: () => import("../components/categories/AddCategory.vue"),
  },
  {
    path: "/edit-category/:id",
    name: "EditCategory",
    component: () => import("../components/categories/EditCategory.vue"),
  },
  {
    path: "/product-list",
    name: "ProductsList",
    component: () => import("../components/products/ProductsList.vue"),
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: () => import("../components/products/AddProduct.vue"),
  },
  {
    path: "/edit-product/:id",
    name: "EditProduct",
    component: () => import("../components/products/EditProduct.vue"),
  },
  {
    path: "/orders-tracking",
    name: "OrdersTracking",
    component: () => import("../components/OrdersTracking.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
