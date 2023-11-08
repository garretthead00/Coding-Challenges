<template>
  <div class="container">
    <!--
        Vue directives v-if & v-else to defined the conditional rendering
     -->
    <h2 v-if="winner">Winner: {{ winner.player }} on lines: {{ winner.winningSquares }}</h2>
    <h2 v-else-if="moveHistory.length === 9">It's a draw, Losers!!!</h2>
    <h2 v-else>Player's Move {{ player }}</h2>
    <button @click="reset" class="btn btn-success mb-3">Reset</button>

    <!--
        Vue directives v-for will allows for continuous rendering through iteration
        Event Listeners are defined with the @symbol. @click
     -->
    <div v-for="(_, x) in 3" :key="x" class="row">
      <button
        v-for="(_, y) in 3"
        :key="y"
        class="square"
        :class="{ isWinner: winner?.winningSquares && winner.winningSquares.includes(3 * x + y) }"
        @click="move(x, y)"
      >
        {{ squares[x][y] }}
      </button>
    </div>
    <h2 class="mt-5">Moves</h2>
    <div v-for="(record, idx) in moveHistory" :key="idx">
      {{ idx }}/{{ moveHistory.length }}: Player {{ record.player }} selected {{ record.squareId }}
    </div>
    <h2 class="mt-5">History</h2>
    <div v-for="(player, idx) in history" :key="idx">Game {{ idx + 1 }}: {{ player }} won</div>
  </div>
</template>

<script>
/**
 * Reactivity functions allows changes in the values to be observed and updated in the HTML.
 * Ref and Reactive
 * ref is for primative types and reactive is for objects. Under the hood, ref creates an object with a value property then calls reactive on it.
 * ref: defines a reactive value that returns an object with a value property.
 * reactive: same as "ref" but, allows for passing in an object as a parameter. No need to access the value with a dot-property.
 * toRefs: Allows to deconstruct the reactive objects. Without this, destructuring will cause the value to lose it's reactiveness. Converts each
 *          property of the object into it's own ref.
 *
 * computed: Computed properties are defined and updated based on the return value of a function. Life ref, except rather than detecting a change in
 *          the value, an outside function will be called to be performed with/on the value that was changed.
 *
 * Life-Cycle Hooks
 * onMounted: triggered when the component is mounted in html DOC
 *
 * watch: Monitor value changes and perform the logic from the callback function
 */
import { computed, onMounted, ref, watch } from 'vue'

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], winningSquares: [a, b, c] }
    }
  }
  return null
}

export default {
  /**
   * setup() serves as an entry point for the Composition API inside components
   * Called only once, after the props are resolved and the component instance has been created.
   * Here, place all logic, methods and variables which are needed by the component.
   * Returning the items that are needed in the component, and access them in the template.
   */
  setup() {
    const player = ref('X')
    const squares = ref([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])
    const history = ref([])
    const moveHistory = ref([])

    // Vue knows that the calculateWinner function relies on the squares reference
    // so it will be called everything the squares property is updated.
    const winner = computed(() => calculateWinner(squares.value.flat()))

    const move = (x, y) => {
      moveHistory.value.push({ player: player.value, squareId: squares.value.length * x + y + 1 })
      if (winner.value) return
      squares.value[x][y] = player.value
      player.value = player.value === 'O' ? 'X' : 'O'
    }

    const reset = () => {
      player.value = 'X'
      squares.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
      moveHistory.value = []
    }

    // Watches the value of the winner property for changes.
    // Monitors on the current and previous values of the ref/reactive.
    watch(winner, (current, previous) => {
      if (current && !previous) {
        history.value.push(current.player)
        localStorage.setItem('history', JSON.stringify(history.value))
      }
    })

    onMounted(() => {
      history.value = JSON.parse(localStorage.getItem('history')) ?? []
    })
    return { history, moveHistory, winner, player, squares, move, reset }
  }
}
</script>

<style scoped>
.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 70px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
}

.isWinner {
  background: green;
}
</style>
