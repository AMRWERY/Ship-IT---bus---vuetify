<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Categories</h2>
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
                <AddCategory />
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
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
            <tr class="bg-blue-lighten-3">
              <th class="text-left text-black">Name</th>
              <th class="text-left text-black">Image</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item">
              <td>{{ item.name }}</td>
              <td class="py-2">
                <img :src="item.img" />
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
                      <EditCategory
                        :item="item"
                        @update-category="editCategory($event)"
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
                  @click="deleteCategory(item)"
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
import AddCategory from "./AddCategory.vue";
import EditCategory from "./EditCategory.vue";

export default {
  name: "CategoriesList",

  components: { AddCategory, EditCategory },

  data() {
    return {
      categories: [],
      dialog: false,
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
    },
    async deleteCategory(item) {
      await deleteDoc(doc(db, "categories", item.id));
      const index = this.categories.findIndex((c) => c.id === item.id);
      if (index !== -1) {
        this.categories.splice(index, 1);
      }
    },
  },

  mounted() {
    const categoriesRef = collection(db, "categories");

    onSnapshot(categoriesRef, (snapshot) => {
      const categories = [];

      snapshot.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        categories.push(pro);
      });
      this.categories = categories;
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
