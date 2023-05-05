<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Edit Product</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col
        xs="12"
        sm="10"
        md="8"
        offset-sm="1"
        offset-md="2"
        class="flex-column justify-center align-center"
      >
        <v-card>
          <form @submit.prevent="updateProduct">
            <v-col>
              <v-text-field
                label="Title"
                type="text"
                required
                v-model.trim="title"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Original Price"
                type="number"
                required
                v-model.trim="originalPrice"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Price"
                type="number"
                required
                v-model.trim="price"
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
              <v-text-field
                label="Quantity"
                type="number"
                required
                v-model.trim="qty"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-textarea
                label="Description"
                type="text"
                required
                v-model.trim="dec"
              ></v-textarea>
            </v-col>
            <v-col>
              <v-select
                clearable
                label="Category"
                :items="[
                  'T-Shirts',
                  'Shoes',
                  'Shirts',
                  'Pants',
                  'Bags',
                  'Jackets',
                ]"
                v-model="select"
              ></v-select>
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
  name: "EditProduct",

  data() {
    return {
      title: "",
      price: "",
      originalPrice: "",
      img: "",
      qty: "",
      select: "",
      dec: "",
      id: String,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.price !== "" &&
        this.img !== "" &&
        this.qty !== "" &&
        this.select !== "" &&
        this.originalPrice !== "" &&
        this.dec !== ""
      );
    },
  },

  methods: {
    updateProduct() {
      const productRef = doc(db, "products", this.id);
      const updateData = {
        title: this.title,
        price: this.price,
        originalPrice: this.originalPrice,
        img: this.img,
        qty: this.qty,
        category: this.select,
        dec: this.dec,
      };

      updateDoc(productRef, updateData)
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
    async getProduct() {
      const docSnap = await getDoc(doc(db, "products", this.id));
      if (docSnap.exists()) {
        let doc = docSnap.data();
        this.title = doc.title;
        this.price = doc.price;
        this.originalPrice = doc.originalPrice;
        this.img = doc.img;
        this.qty = doc.qty;
        /* this.select = doc.select; */
        this.select = doc.category;
        this.dec = doc.dec;
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
