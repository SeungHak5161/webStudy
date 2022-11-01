<template>
  <div id="clearAllContainer" @click="clearTodo">Clear All</div>
</template>

<script>
export default {
  methods: {
    clearTodo: function () {
      localStorage.clear();
      this.$emit("clearAll");
    },
  },
};
</script>

<style scoped>
#clearAllContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  height: 3rem;
  background-color: white;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 5px;
  color: #ff3f5b;
  font-weight: 900;
}
#clearAllContainer:hover {
  background-color: #ff3f5b;
  color: white;
  transition: 300ms;
}
</style>
