<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <div
        v-for="comment in comments"
        class="comment-item"
        v-bind:key="comment._id"
      >
        <h3>{{ comment.firstName }}</h3>
        <p>{{ comment.email }}</p>
        <p>{{ comment.comment }}</p>
      </div>
      <SearchComment/>
    </div>
  </div>
</template>
  
  
  <script>
  import SearchComment from "../components/SearchComment";
  import axios from "axios";
  export default {
    name: "CommentsPage",
    components:{
      SearchComment
    },
    data() {
      return {
        comments:[],
      };
    },
    async created() {
      const result = await axios.get ('http://127.0.0.1:5001/api/comment/getall')
      const comments = result.data.comment;
      this.comments = comments;
    }
  };
  </script>
  
  <style scooped>
h1 {
  color: red;
}
</style>