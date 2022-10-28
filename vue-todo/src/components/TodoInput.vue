<template>
  <div id="inputBox">
    <input type="text" v-model="newTodoItem" />
    <span id="addContainer" @click="addTodo">
      <img id="addBtn" src="./../assets/add.png" alt="+" />
      <!-- <i class="fa-solid fa-plus"></i> -->
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
#inputBox {
  height: 3rem;
  line-height: 3rem;
  border-radius: 5px;
}
#inputBox input {
  height: 100%;
  border-style: none;
  font-size: 0.9rem;
}
#addContainer {
  float: right;
  background: linear-gradient(to right, #f6d365, #fda085);
  display: block;
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 0 5px 5px 0;
  /* position: absolute; */
}
#addContainer #addBtn {
  height: 100%;
  /* position: relative; */
}
</style>
