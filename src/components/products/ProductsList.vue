<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Products</h2>
      </v-col>
      <v-col xs="12">
        <div>
          <v-dialog v-model="dialog" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                icon="mdi mdi-plus"
                class="float-right"
                color="purple-lighten-2"
                v-bind="props"
              >
              </v-btn>
            </template>

            <v-card width="800">
              <v-card-text>
                <AddProduct />
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr class="bg-blue-lighten-3">
              <th class="text-left text-black">Title</th>
              <th class="text-left text-black">Category</th>
              <th class="text-left text-black">Image</th>
              <th class="text-left text-black">Price</th>
              <th class="text-left text-black">Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item">
              <td>{{ item.title }}</td>
              <td>{{ item.category }}</td>
              <td class="py-2">
                <img :src="item.img" />
              </td>
              <td>
                <v-chip variant="outlined" color="green"
                  >${{ item.price }}</v-chip
                >
              </td>
              <td>
                <v-chip variant="elevated" color="primary">
                  {{ item.qty }}
                </v-chip>
              </td>
              <td>
                <v-dialog transition="dialog-bottom-transition" width="auto">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="primary"
                      v-bind="props"
                      icon="mdi mdi-file-edit-outline"
                    ></v-btn>
                  </template>
                  <v-card width="800">
                    <v-card-text>
                      <EditProduct
                        :item="item"
                        @update-product="updateProduct($event)"
                      />
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </td>
              <td>
                <v-btn
                  icon="mdi mdi-delete"
                  color="red-lighten-1"
                  density="comfortable"
                  @click="deleteProduct(item)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  getDocs,
  collection,
  query,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "@/firebase/config";
import AddProduct from "./AddProduct.vue";
import EditProduct from "./EditProduct.vue";

export default {
  data() {
    return {
      products: [],
      dialog: false,
    };
  },

  components: { AddProduct, EditProduct },

  methods: {
    editItem(item) {
      let id = item?.id;
      console.log(id);
    },
    async getData() {
      const querySnap = await getDocs(query(collection(db, "products")));

      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        console.log(doc.id);
        this.products.push(pro);
        console.log(pro);
      });
    },
    async deleteProduct(item) {
      await deleteDoc(doc(db, "products", item.id));
      const index = this.products.findIndex((c) => c.id === item.id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
  },

  mounted() {
    const productsRef = collection(db, "products");

    onSnapshot(productsRef, (snapshot) => {
      const products = [];

      snapshot.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        products.push(pro);
      });
      this.products = products;
    });
  },
};
</script>

<style scoped>
img {
  border-radius: 100%;
  height: 50px;
  width: 50px;
}
</style>
