<template>
  <div id="nav-bar ">
    <router-link to="/products" id="products-link">
      <h1>Products</h1>
    </router-link>
    <router-link to="/comments" id="comment-link"> Comments</router-link>
    <router-link to="/AddProduct" id="comment-link"> New Product</router-link>
  </div>
</template>


<script>
export default {
  name: "NavBar",
};
</script>