<template>
  <div>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Barcode"
          v-model="barcode"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Model" v-model="model" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Quantity"
          v-model="inStock"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Material"
          v-model="material"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Price" v-model="price" />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      barcode: "",
      model: "",
      inStock: "",
      material: "",
      price: "",
    };
  },
  methods: {
    async saveProduct() {
      await axios.post("http://127.0.0.1:5000/api/product/create", {
        name: this.name,
        barcode: this.barcode,
        model: this.model,
        inStock: this.inStock,
        material: this.material,
        price: this.price,
      });
      this.name= "";
      this.barcode= "";
      this.model= "";
      this.inStock= "";
      this.material= "";
      this.price= "";
      this.$router.push("/products")
    },
  },
};
</script>

