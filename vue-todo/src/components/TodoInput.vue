<template>
  <div id="inputBox">
    <input
      ref="inputText"
      type="text"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
    />
    <span id="addBtn" @click="addTodo">
      <img id="addImg" src="./../assets/add.png" alt="+" />
    </span>
    <ModalComponent v-if="showModal" @close="closeModal">
      <h3 slot="header">내용을 입력해주세요</h3>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from "./common/modal.vue";
export default {
  data: function () {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  components: {
    ModalComponent: ModalComponent,
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem.trim().length > 0) {
        const item = { value: this.newTodoItem, completed: false };
        localStorage.setItem(this.newTodoItem, JSON.stringify(item));
        this.clearInput();
        this.$emit("add", item);
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
    closeModal: function () {
      this.showModal = false;
      this.$refs.inputText.focus();
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
  display: flex;
  justify-content: center;
}
#inputBox input {
  height: 100%;
  border-style: none;
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 0;
  width: calc(100% - 3.5rem);
  padding-left: 1rem;
  margin-right: 0.5rem;
  border: black 2px solid;
}
#addBtn {
  height: 100%;
  aspect-ratio: 1;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
#addBtn #addImg {
  height: 80%;
}
#addBtn #addImg:hover {
  transform: scale(1.1);
  transition: 100ms;
}
#exitImg {
  height: 2rem;
  cursor: pointer;
}
</style>
