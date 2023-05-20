<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h3 class="text-red">Order Details</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr class="bg-blue-lighten-3">
              <th class="text-left text-black">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="status in orderDetail.status" :key="status.id">
              <td>{{ status.name }}</td>
              <td>
                <v-select
                  class="mt-5"
                  v-model="status.isActive"
                  @update:modelValue="changeStatus(status.id, status.isActive)"
                  :items="['true', 'false']"
                ></v-select>
              </td>
            </tr>
          </tbody>
        </v-table>
        <v-btn @click="updateOrder">Save</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr class="bg-blue-lighten-3">
              <th class="text-left text-black">Name</th>
              <th class="text-left text-black">Image</th>
              <th class="text-left text-black">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderDetail.cartItems" :key="item.id">
              <td>{{ item.title }}</td>
              <td class="py-2">
                <v-avatar :image="item.img"> </v-avatar>
              </td>
              <td>${{ item.price }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore";
import db from "@/firebase/config";

export default {
  name: "OrderDetails",

  props: ["orderDetail"],

  data() {
    return {
      orders: [],
      status: null,
      isActive: false,
    };
  },

  methods: {
    async getOrderDetails() {
      const querySnap = await getDocs(query(collection(db, "orders")));

      querySnap.forEach((doc) => {
        let order = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        this.orders.push(order);
      });
    },
    changeStatus(id, isActive) {
      console.log(id, "status.id");
      console.log(isActive, "status.isActive");
    },
    updateOrder() {
      debugger;
      const orderRef = doc(db, "orders", this.orderDetail.status?.id);
      console.log("orders");
      const updateData = {
        isActive: this.isActive,
      };

      debugger;
      updateDoc(orderRef, updateData)
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
  },

  mounted() {
    this.getOrderDetails();
  },
};
</script>
