<template>
     <div class="border">
      <h3>You can put your command here</h3>

      <form action="/action_page.php" id="usrform">
        Name: <input type="text" name="usrname" v-model="firstName" />
        Email: <input type="email" name="email" v-model="email" />
        
      </form>
      <br />
      <textarea rows="4" cols="50" name="comment" form="usrform" v-model="comment">
Enter text here...</textarea
      >
      <br/>
      <button id="add-to-comment"  v-on:click="saveComment" > Submit </button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ProductComment",
    date(){
        return{
            firstName:"",
            email:"",
            comment:"",
            productId:"",

        }
    },
    methods:{
        async saveComment(){
            await axios.post("http://127.0.0.1:5001/api/comment/create",{
                firstName:this.firstName,
                email:this.email,
                comment:this.comment,
                productId:this.$route.params.id
            });
            this.firstName="",
            this.email="",
            this.comment=""
            this.$router.push("/products")
        }
    }
}
</script>