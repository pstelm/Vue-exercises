<template>
  <div class="home">
    <h1>Home</h1>
    <Counter />
    <div class="buttons">
      <button @click="counterStore.decreaseCounter">-</button>
      <button @click="counterStore.increaseCounter">+</button>
    </div>
    <div class="info">
      <p>This counter is: {{ counterStore.oddOrEven }}</p>
      <!-- <p>2nd version - This counter is {{ counterStore.oddOrEven2 }}</p> -->
    </div>
    <div class="line"></div>
    <div class="info">
      <h3>Edit counter:</h3>
      <input v-model="counterStore.counter" type="number" class="input" />
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<style>
.line {
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background-color: var(--color-border);
}

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons button {
  width: 40px;
  margin: 10px;
  font-size: 30px;
  background-color: var(--vt-c-white-soft);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: hsla(160, 100%, 37%, 1);
}

.info {
  margin-bottom: 20px;
  text-align: center;
}

h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.input {
  padding: 5px;
  font-size: 20px;
  border: 3px solid white;
  border-radius: 3px;
}

.input:focus {
  outline: none;
  border: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
