<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ counterStore.counter }}</div>
    <div class="buttons">
      <button @click="counterStore.decreaseCounter">-</button>
      <button @click="counterStore.increaseCounter">+</button>
    </div>
    <div class="info">
      <p>This counter is: {{ counterStore.oddOrEven }}</p>
      <p>2nd version - This counter is {{ counterStore.oddOrEven2 }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.count {
  font-size: 50px;
  color: hsla(160, 100%, 37%, 1);
}

.buttons button {
  width: 40px;
  margin: 10px;
  font-size: 30px;
  background-color: var(--vt-c-white-soft);
  border: none;
  cursor: pointer;
}

.buttons button:hover {
  background-color: hsla(160, 100%, 37%, 1);
}

.info {
  text-align: center;
}
</style>
