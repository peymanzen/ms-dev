import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from "../views/ProductsPage.vue"
import SingleProduct from "../views/SingleProduct.vue"
import AddProduct from "../views/AddProduct.vue"
import CommentsPage from "../views/CommentsPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'SingleProducts',
    component: SingleProduct,
  },
  {
    path: '/addproduct',
    name:'AddProduct',
    component:AddProduct
  },
  {
    path: '/comments',
    name:'CommentsPage',
    component:CommentsPage
  },
  {
    path :'/',
    redirect: '/products'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
