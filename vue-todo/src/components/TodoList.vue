<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem.value">
        <div class="liBox">
          <span class="liContent">
            <input
              class="liCheckbox"
              type="checkbox"
              @click="completeTodo(todoItem)"
              :checked="todoItem.completed"
            />
            <span :class="{ textCompleted: todoItem.completed }">
              {{ todoItem.value }}
            </span>
          </span>
          <span class="deleteBtn">
            <img
              @click="removeTodo(todoItem, index)"
              class="deleteImg"
              src="./../assets/trashcan.png"
              alt="delete"
            />
          </span>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    completeTodo: function (todoItem) {
      todoItem.completed = !todoItem.completed;
      this.$emit("complete", todoItem);
    },
    removeTodo: function (todoItem, index) {
      this.$emit("remove", todoItem, index);
    },
  },
};
</script>

<style>
ul {
  padding-left: 0;
  list-style: none;
}
.liBox {
  height: 3rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.liCheckbox {
  margin-right: 1rem;
}
.liContent {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100%;
  background: white;
  border-radius: 5px;
  width: calc(100% - 3.5rem);
  margin-right: 0.5rem;
  padding-left: 0.5rem;
}
.deleteBtn {
  height: 100%;
  display: block;
  aspect-ratio: 1;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.deleteBtn .deleteImg {
  height: 80%;
}
.deleteBtn .deleteImg:hover {
  transform: scale(1.1);
  transition: 100ms;
}
.textCompleted {
  text-decoration: line-through;
  color: gray;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
