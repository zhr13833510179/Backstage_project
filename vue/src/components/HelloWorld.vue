<template>
  <form @submit.prevemt="insertData">
    <input type="text" v-model='name'>
    <button>添加</button>
  </form>
</template>

<script>
import axios from "axios"

export default {
  data () {
    return {
      name:''
    }
  },
  methods:{
    insertData(){
      axios
      .post("http://127.0.0.1:7001/clazzList",{
        name:this.name
      })
      .then(res => {
      
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
