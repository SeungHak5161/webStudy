<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

const rawHtml='<span style="color:red">This should be red.</span>'
const isButtonDisabled=false
let date=new Date('1995-12-17T03:24:00')
function formatDate(date:Date):string{
  return date.toDateString()
}
let seen=true
function clickHandler(){
  seen=!seen
  console.log(seen)
}
</script>

<template>
  <div>
    <p> interpolation : {{rawHtml}}</p>
    <p> v-html : <span v-html="rawHtml"></span></p>
    <button :disabled="isButtonDisabled">button</button>
    <span :title="formatDate(date)">{{formatDate(date)}}</span>
    <div>
      <span v-if="seen">Now you see me</span>
      <!-- v-on:something은 @something으로 축약가능 -->
      <button v-on:click="clickHandler">Click to hide</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
