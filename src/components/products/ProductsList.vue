<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Products</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Category</th>
              <th class="text-left">Image</th>
              <th class="text-left">Price</th>
              <th class="text-left">Quantity</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item">
              <td>{{ item.title }}</td>
              <td>{{ item.category }}</td>
              <td>
                <v-avatar :image="item.img" size="60"></v-avatar>
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
                <v-btn
                  variant="outlined"
                  rounded="xl"
                  color="teal-darken-1"
                  @click="editItem(item)"
                  >Update</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getDocs, collection, query } from "firebase/firestore";
import db from "@/firebase/config";

export default {
  data() {
    return {
      products: [],
    };
  },

  methods: {
    editItem(item) {
      let id = item?.id;
      console.log(id);
      this.$router.push("/edit-product/" + id);
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
  },

  mounted() {
    this.getData();
  },
};
</script>
