<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Edit Category</h2>
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
        <v-card>
          <form @submit.prevent="updateCategory">
            <v-col>
              <v-text-field
                label="Title"
                type="text"
                required
                v-model.trim="name"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Image Url"
                type="url"
                required
                v-model.trim="img"
              ></v-text-field>
            </v-col>
            <v-col>
              <img :src="img" height="300" />
            </v-col>
            <v-col>
              <v-btn
                color="indigo-lighten-1"
                type="submit"
                :disabled="!formIsValid"
                >Update</v-btn
              >
            </v-col>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { doc, updateDoc, getDoc } from "firebase/firestore";
import db from "@/firebase/config";

export default {
  name: "EditCategory",

  data() {
    return {
      name: "",
      img: "",
      id: String,
    };
  },

  computed: {
    formIsValid() {
      return this.name !== "" && this.img !== "";
    },
  },

  methods: {
    updateCategory() {
      const productRef = doc(db, "categories", this.id);
      const updateData = {
        title: this.name,
        img: this.img,
      };

      updateDoc(productRef, updateData)
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
      this.$router.push("/categories");
    },
    async getProduct() {
      const docSnap = await getDoc(doc(db, "categories", this.id));
      if (docSnap.exists()) {
        let doc = docSnap.data();
        this.name = doc.name;
        this.img = doc.img;
      } else {
        console.log("Document does not exist");
      }
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
