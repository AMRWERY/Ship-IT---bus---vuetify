<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Add Category</h2>
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
        <form @submit.prevent="addCategory">
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
              label="In Stock"
              type="number"
              required
              v-model.trim="inStock"
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
              >Add</v-btn
            >
          </v-col>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import db from "@/firebase/config";

export default {
  name: "AddCategory",

  data() {
    return {
      name: "",
      img: "",
      inStock: "",
      id: String,
    };
  },

  computed: {
    formIsValid() {
      return this.name !== "" && this.img !== "" && this.inStock !== "";
    },
  },

  methods: {
    async addCategory() {
      if (!this.formIsValid) {
        return;
      } else {
        const colRef = collection(db, "categories");
        const dataObj = {
          name: this.name,
          img: this.img,
          inStock: this.inStock,
        };
        const docRef = await addDoc(colRef, dataObj);
        console.log("Document was created with ID:", docRef.id);
      }
      this.$router.push("/categories");
    },
    pushImg(img) {
      this.img.push(img);
      console.log(this.img);
    },
  },

  created() {
    this.addCategory();
  },
};
</script>
