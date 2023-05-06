<template>
  <div id="page-wrap">
    <div id="img-wrap">
      <img src="../assets/fur1.jpg" />
    </div>
    <div id="single-product">
      <h1>{{ product.name }}</h1>
      <h3>{{ product.price }}</h3>
      <h3>{{ product.designer }}</h3>
      <h3>{{ product.model }}</h3>
      <h3>{{ product.inStock }}</h3>
    </div>
   <ProductComment/>
   <Comments/>
   
  </div>
</template>


<script>
import axios from "axios";
import ProductComment from "../components/AddComment.vue";
import Comments from "../components/ProductComments.vue"
export default {
  name: "SingleProduct",
  components:{
    ProductComment,
    Comments
  },
  data() {
    return {
      product: {},
    };
  },
  async created() {
    const result = await axios.get(
      `http://127.0.0.1:5000/api/product/byId/${this.$route.params.id}`
    );
    const product = result.data.product;
    this.product = product;
  },
};
</script>

<style scooped>
h1 {
  color: blue;
}
</style>