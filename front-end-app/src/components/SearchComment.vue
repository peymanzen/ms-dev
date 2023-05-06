<template>
  <div>
    <input type="text" v-model="search" placeholder="Search Comment..." />
    <button id="add-to-comment" v-on:click="filtered">Search</button>
    <div
      v-for="comment in comments"
      class="comment-item"
      v-bind:key="comment._id"
    >
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchComment",
  data() {
    return {
      comments: [],
      search: "",
    };
  },
  mounted() {
    console.log(this.search);
  },
  methods: {
    async filtered() {
      const result = await axios.get(
        `http://127.0.0.1:5002/api/filter/filter?filter=${this.search}`
      );
      const comments = result.data.filter;
      this.comments = comments;
    },
  },
};
</script>