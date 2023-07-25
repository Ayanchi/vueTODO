import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    initializeStore(state) {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        state.todos = JSON.parse(storedTodos);
      }
    },
  },
  actions: {
    addTodoAction({ commit }, todo) {
      commit('addTodo', todo);
    },
    deleteTodoAction({ commit }, index) {
      commit('deleteTodo', index);
    },
  },
  getters: {
    getAllTodos: state => state.todos,
  },
});

export default store;
