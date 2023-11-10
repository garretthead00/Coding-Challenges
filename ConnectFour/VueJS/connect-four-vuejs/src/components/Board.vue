<template>
  <div class="container">
    <h2>Connect Four</h2>

    <h2 v-if="winner">Winner: {{ winner }}</h2>
    <h2 v-else-if="gameOver">Draw</h2>
    <h2 v-else>Player's Turn: {{ player }}</h2>
    <button @click="reset" class="btn btn-success mb-3">Reset</button>
    <hr />
    <div v-for="(_, x) in squares.length" :key="x" class="row">
      <button
        v-for="(_, y) in squares[x].length"
        :key="y"
        @click="move(x, y)"
        class="square"
        :class="{ occupiedP1: squares[x][y] === 'X', occupiedP2: squares[x][y] === 'O' }"
      >
        {{ squares[x][y] }}
      </button>
    </div>
    <hr />
    <h3 v-if="lastMove.player">
      Last Move: #{{ turnCount }} {{ lastMove.player }} played square [{{ lastMove.x }},{{
        lastMove.y
      }}]
    </h3>
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue'

const calculateWinner = (thisMove, squares) => {
  const sequenceString = Array.from({ length: 4 }, () => thisMove.player).join('')
  if (thisMove.player) {
    if (
      getRow(thisMove.x, squares).join('').includes(sequenceString) ||
      getColumn(thisMove.y, squares).join('').includes(sequenceString) ||
      getLeftDiag(thisMove.x, thisMove.y, squares).join('').includes(sequenceString) ||
      getRightDiag(thisMove.x, thisMove.y, squares).join('').includes(sequenceString)
    ) {
      return thisMove.player
    }
  }
  return null
}
const getRow = (x, board) => {
  return board[x]
}
const getColumn = (y, board) => {
  return board.map((row) => row[y])
}
const getLeftDiag = (x, y, board) => {
  const row = []
  let leftSide = { x, y }

  while (withinBounds(leftSide, 0, board.length - 1)) {
    leftSide.x--
    leftSide.y--
    row.push(board[leftSide.x][leftSide.y])
  }
  row.push(board[x][y])

  let rightSide = { x, y }
  while (withinBounds(rightSide, 0, board.length - 1)) {
    rightSide.x++
    rightSide.y++
    row.push(board[rightSide.x][rightSide.y])
  }

  return row
}
const getRightDiag = (x, y, board) => {
  const row = []
  let leftSide = { x, y }
  while (withinBounds(leftSide, 0, board.length - 1)) {
    leftSide.x++
    leftSide.y--
    row.push(board[leftSide.x][leftSide.y])
  }
  row.push(board[x][y])

  let rightSide = { x, y }
  while (withinBounds(rightSide, 0, board.length - 1)) {
    rightSide.x--
    rightSide.y++
    row.push(board[rightSide.x][rightSide.y])
  }

  return row
}
const withinBounds = (position, min, max) => {
  return position.x > min && position.x < max && position.y > min && position.y < max
}

const getNextAvailableSlotInColumn = (y, board) => {
  const column = getColumn(y, board)

  if (column[0] !== '') return undefined

  const findFirstFilledSlot = column.findIndex((element) => element !== '')
  const nextAvailable =
    findFirstFilledSlot === 0
      ? undefined
      : findFirstFilledSlot === -1
      ? column.length - 1
      : findFirstFilledSlot - 1

  return nextAvailable
}

export default {
  setup() {
    const turnCount = ref(0)
    const player = ref('X')
    const lastMove = reactive({ player: undefined, x: undefined, y: undefined })
    const squares = ref([
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ])

    const winner = computed(() => calculateWinner(lastMove, squares.value))
    const gameOver = computed(
      () => turnCount.value === squares.value.length * squares.value[0].length
    )

    const move = (x, y) => {
      const nextSlot = getNextAvailableSlotInColumn(y, squares.value)
      if (winner.value || gameOver.value || squares.value[x][y] !== '' || nextSlot === undefined)
        return
      lastMove.player = player.value
      lastMove.x = nextSlot
      lastMove.y = y
      squares.value[nextSlot][y] = player.value
      player.value = player.value === 'O' ? 'X' : 'O'
      turnCount.value++
    }
    const reset = () => {
      player.value = 'X'
      lastMove.player = undefined
      lastMove.x = undefined
      lastMove.y = undefined
      squares.value = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
      ]
    }

    return { gameOver, lastMove, player, squares, turnCount, winner, move, reset }
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

.occupiedP1 {
  background-color: red;
}

.occupiedP2 {
  background-color: blue;
}
</style>
