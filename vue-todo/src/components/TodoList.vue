<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">
        <span>{{ todoItem }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        // webpack dev server때문에 기본으로 추가되는 key는 제외
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    removeTodo: function () {
      // localStorage.removeItem(this.todoItem);
    },
  },
};
</script>

<style></style>
