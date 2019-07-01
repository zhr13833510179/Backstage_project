<template>
<div>
  <form @submit.prevent="insertData">
    <input type="text" v-model='mailbox'>
    
    <input type="text" v-model='address'>
    
    <input type="text" v-model='accountPassword'>
    
    <input type="text" v-model='age'>
    
    <input type="text" v-model='word'>
    
    <input type="text" v-model='personality'>
    <button>添加</button>
    <!-- <button @click="putClazz()">修改</button> -->
  </form>
  <form @submit.prevent="putClazz">
    <input type="text" v-model='putpersonaldatamailbox'>
    
    <button @click="putClazz()">修改</button>
  </form>
  </div>
  
</template>

<script>
import axios from "axios"

export default {
  data () {
    return {
      mailbox:'',
      putpersonaldatamailbox:''
      // address:''
    }
  },
  methods:{
    insertData(){
      axios
      .post("http://127.0.0.1:7001/personaldata",{
        mailbox:this.mailbox,
        address:this.address,
        accountPassword:this.accountPassword,
        age:this.age,
        word:this.word,
        personality:this.personality
      })
      .then(res => {
      
      })
    }
  },
  putClazz() {
      axios
        .put("http://127.0.0.1:7001/personaldata" + this.editDataId, {
          putpersonaldatamailbox: this.putpersonaldatamailbox
        })
        .then(res => {
          // this.dialogFormVisible = false;
          // this.clazzList = res.data;
          // this.getclazzList()
          // this.putclazzname = ""
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
