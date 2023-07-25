<template>
  <div>
    <router-link class="link" to="/form">ADD POST</router-link>
      <div class="posts" v-for="(todo, index) in todos" :key="index">
        <div><strong>{{ todo.title || 'empty!!' }}</strong></div>
        <div> {{ todo.desc || 'empty!!' }}</div>
        
        <div class="down">
          <div>name: {{ todo.name || 'no name!!' }}</div>
          <div>data: {{ todo.currentDate }}</div>
        </div>
        <button @click="deleteTodo(index)">Delete</button>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getAllTodos;
    },
  },
  methods: {
    deleteTodo(index) {
      this.$store.dispatch('deleteTodoAction', index);
    },
  },
  created() {
    this.$store.commit('initializeStore');
  },
};
</script>
<style>
strong{
  font-size: 40px;
}
.link{
  border-bottom: 2px solid #eee;
  width: 500px;
  font-family: 'Lato';
  text-decoration: none;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  margin: 0 20px 40px 0;
  position: relative;

}

.link:before {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #000;
  content: '';
  -webkit-transform: translateX(8px);
  opacity: 0;
  transition-property: -webkit-transform, opacity;
  transition-duration: .3s;
}
.link:hover:before {
  -webkit-transform: translateX(0);
  opacity: 1;
}
.posts{
  margin-top: 40px;
  border: 1px solid black;
  padding: 10px 40px;
}
.down{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
button{
  margin-top: 10px;
}
</style>