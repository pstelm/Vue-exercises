<template>
  <div class="about">
    <h1>About</h1>
    <button class="counter-btn" @click="counterStore.increaseCounter">
      {{ counterStore.counter }}
    </button>
    <p>Click to increase number</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<style scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter-btn {
  margin: 20px 10px;
  padding: 5px 15px;
  font-size: 30px;
  background-color: var(--vt-c-white-soft);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.counter-btn:hover {
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
