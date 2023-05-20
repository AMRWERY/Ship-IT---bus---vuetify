<template>
  <v-container>
    <v-row>
      <v-col xs="12"><h2 class="text-red">Orders Tracking</h2></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr class="bg-blue-lighten-3">
              <th class="text-left text-black">Order ID</th>

              <th class="text-left text-black">Order Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in allOrders" :key="order">
              <td>{{ order.id }}</td>

              <td>
                {{ new Date(order.orderDate).toLocaleString() }}
              </td>
              <td>
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      color="purple-lighten-3"
                      icon="mdi mdi-eye-circle-outline"
                      density="comfortable"
                      @click="getOrderDetails(order)"
                    >
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-text>
                      <OrderDetails :orderDetail="selectedOrder" />
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getDocs, query, collection } from "firebase/firestore";
import db from "../../firebase/config";
import OrderDetails from "./OrderDetails.vue";

export default {
  name: "OrdersTracking",

  components: { OrderDetails },

  data() {
    return {
      dialog: false,
      allOrders: [],
      orders: [],
      selectedOrder: null,
    };
  },

  methods: {
    async getAllOrders() {
      const querySnap = await getDocs(query(collection(db, "orders")));

      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        this.allOrders.push(pro);
      });
    },

    getOrderDetails(order) {
      this.selectedOrder = order;
    },
  },

  mounted() {
    this.getAllOrders();
  },
};
</script>
