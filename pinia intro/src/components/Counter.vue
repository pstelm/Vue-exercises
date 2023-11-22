<template>
  <div class="count">{{ counterStore.counter }}</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<style>
.count {
  font-size: 50px;
  color: hsla(160, 100%, 37%, 1);
}
</style>
