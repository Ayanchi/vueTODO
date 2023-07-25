
<template>
  <div>
    <router-link class="link" to="/about">BACK</router-link>
  <div class="list">
    
    <h1>List</h1>
    <div>
      <input v-model="newTodo.title" placeholder="title">
      <input v-model="newTodo.desc" placeholder="name">
      <textarea type="text" v-model="newTodo.name" placeholder="description"></textarea>
    </div>

    <div class="buttons">
      <button @click="addTodo">Edit</button>
      <button @click="clearTodo" >clear</button>
    </div>
    
    
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: {
        title: '',
        desc: '',
        name: '',
        currentDate: new Date().toLocaleDateString()
      },
    };
  },
  methods: {
    addTodo() {
      // if (this.newTodo.trim() === '') return;
      this.$store.dispatch('addTodoAction', this.newTodo);
      this.newTodo = '';
      this.$router.push({ path: '/about' });
    },
    clearTodo(){
      this.newTodo.title = '';
      this.newTodo.desc = '';
      this.newTodo.name = '';
    }
  },
  created() {
    this.$store.commit('initializeStore');
  },
};
</script>

<style>
.list{
  text-align: center;
}
input, textarea{
  margin-bottom: 10px;
  width: 70%;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #cccccc;
}
textarea{
  resize: vertical;
}
.buttons{
  display: flex;
  justify-content: space-around;
}
button{
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  font-size: 16px;
  margin: 15px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #555555;
}
button:hover {
  background-color: #555555;
  color: white;
}
</style>
