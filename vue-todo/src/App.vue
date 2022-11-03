<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @add="addTodo" />
    <TodoList @remove="removeTodo" @complete="completeTodo" />
    <TodoFooter @clearAll="clearAll" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  // el: "#app",
  data: function () {
    return {
      todoItems: [],
    };
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    addTodo(item) {
      this.todoItems.push(item);
    },
    removeTodo(todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.value);
    },
    completeTodo(todoItem) {
      localStorage.setItem(todoItem.value, JSON.stringify(todoItem));
    },
    clearAll() {
      this.todoItems = [];
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        // webpack dev server때문에 기본으로 추가되는 key는 제외
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 500px;
  box-sizing: border-box;
}
body {
  text-align: center;
  background-color: #e5e2e2;
  display: flex;
  justify-content: center;
}
input {
  border-style: groove;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
