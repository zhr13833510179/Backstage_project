<template>
  <form @submit.prevemt="ClassAddition">
    <input type="text" v-model='name'>班级<br>
    <input type="text" v-model="names">资料<br>
    <input type="text" v-model="namess">班级
    <button>添加</button>
  </form>
</template>

<script>
import axios from "axios"

export default {
  data () {
    return {
      name:'',
      names:'',
      namess:''
    }
  },
  methods:{
    ClassAddition(){
      axios
      .post("http://127.0.0.1:7001/clazzList",{
        name:this.name,
        names:this.names
      })
      .then(res => {
      
      })
    },
    StudentAddition(){
      axios
      .post("http://127.0.0.1:7001/studentList",{
        name:this.name,
        names:this.names,
      })
      .then(res=>{
      })
    },
    success () {
      axios
      .post("http://127.0.0.1:7001/success",{
        name:this.name,
        names:this.names,
        namess:1
      })
    } ,
    teacherList(){
      axios
      .post("http://127.0.0.1:7001/teacherList",{
        name:this.name,
        names:this.names
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
