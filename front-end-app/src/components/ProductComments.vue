<template>
<div>
    <div v-for="comment in comments" class="comment-item" v-bind:key="comment._id">
          <h3>{{ comment.firstName }}</h3>
          <p >{{ comment.email }}</p>
          <p>{{ comment.comment }}</p>
        </div>
   </div>   
</template>

<script>
import axios from "axios";
export default {
    name:"ProductComment",
    data(){
        return{
            comments:[]
        }
    },
    async created(){
    const res = await axios.get(
      `http://127.0.0.1:5001/api/comment/byProd/${this.$route.params.id}`
    );
    const comments = res.data.comments;
    this.comments = comments;
  }
}
</script>