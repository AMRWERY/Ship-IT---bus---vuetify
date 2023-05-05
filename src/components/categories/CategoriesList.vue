<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Categories</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        xs="12"
        sm="10"
        md="8"
        offset-sm="1"
        offset-md="2"
        class="flex-column justify-center align-center"
      >
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Image</th>
              <th class="text-left">Stock</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item">
              <td>{{ item.name }}</td>
              <td>
                <v-avatar :image="item.img" size="60"></v-avatar>
              </td>
              <td>
                <v-chip variant="elevated" color="primary">
                  {{ item.inStock }}
                </v-chip>
              </td>
              <td>
                <v-btn
                  variant="outlined"
                  rounded="xl"
                  color="teal-darken-1"
                  @click="editCategory(item)"
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
  name: "CategoriesList",

  data() {
    return {
      categories: [],
    };
  },

  methods: {
    async getData() {
      const querySnap = await getDocs(query(collection(db, "categories")));

      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        console.log(doc.id);
        this.categories.push(pro);
        console.log(pro);
      });
    },
    editCategory(item) {
      let id = item?.id;
      console.log(id);
      this.$router.push("/edit-category/" + id);
    },
  },

  mounted() {
    this.getData();
  },
};
</script>
