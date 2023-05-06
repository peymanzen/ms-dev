<template>
  <div id="page-wrap">
    <div class="grid-wrap ">
      <div v-for="product in products" class="product-item" v-bind:key="product._id">
        <img src="../assets/fur1.jpg"
        :alt="product.img"
        />
        <h3>{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <p>{{ product.desc }}</p>
        <router-link v-bind:to="'/products/' + product._id">
          <button>View Product</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "ProductsPage",
  data() {
    return {
      products:[],
    };
  },
  async created() {
    const result = await axios.get ("http://127.0.0.1:5000/api/product/getall")
    const products = result.data.product;
    this.products = products;
  }
};
</script>

<style scooped>
h1 {
  color: red;
}
</style>