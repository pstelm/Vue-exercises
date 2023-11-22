import { defineStore } from 'pinia'

export const useCounterStore = defineStore('CounterStore', {
  state: () => ({
    counter: 0,
    userName: 'Paulina'
  }),
  actions: {
    increaseCounter() {
      const ttttt = useCounterStore()
      ttttt.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  },
  getters: {
    oddOrEven() {
      if (this.counter % 2 === 0) return 'even'
      return 'odd'
    },
    oddOrEven2: (state) => {
      if (state.counter % 2 === 0) return 'even'
      return 'odd'
    }
  }
})
