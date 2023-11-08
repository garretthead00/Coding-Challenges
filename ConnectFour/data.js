const DEFAULTS = {
  SEQ: 4,
  BOARD_WIDTH: 10,
  BOARD_HEIGHT: 4,
  PLAYER_COUNT: 2,
  PVC: "PvC",
  PVP: "PvP",
};

const GAME_STATES = {
  WINNING: "winning",
  GAME_OVER: "game over",
  CONTINUE: "continue",
};

const TEST_GAME_PLAYS = [
  { player: "red", column: 2 },
  { player: "blue", column: 1 },
  { player: "red", column: 1 },
  { player: "blue", column: 0 },
  { player: "red", column: 9 },
];

const TEST_INVALID_COLUMN = [
  { player: "red", column: 2 },
  { player: "blue", column: 11 },
  { player: "red", column: 1 },
  { player: "blue", column: 0 },
  { player: "red", column: 9 },
];

const TEST_OUT_OF_TURN_PLAYS = [
  { player: "red", column: 2 },
  { player: "blue", column: 1 },
  { player: "red", column: 1 },
  { player: "red", column: 0 },
];

const TEST_WINNER_COLUMN = [
  { player: "red", column: 2 },
  { player: "blue", column: 1 },
  { player: "red", column: 2 },
  { player: "blue", column: 3 },
  { player: "red", column: 2 },
  { player: "blue", column: 4 },
  { player: "red", column: 2 },
  { player: "blue", column: 5 },
];

const TEST_WINNER_ROW = [
  { player: "red", column: 0 },
  { player: "blue", column: 0 },
  { player: "red", column: 1 },
  { player: "blue", column: 0 },
  { player: "red", column: 2 },
  { player: "blue", column: 1 },
  { player: "red", column: 3 },
  { player: "blue", column: 3 },
];

const TEST_WINNER_R_DIAG = [
  { player: "red", column: 3 },
  { player: "blue", column: 3 },
  { player: "red", column: 0 },
  { player: "blue", column: 3 },
  { player: "red", column: 3 },
  { player: "blue", column: 2 },
  { player: "red", column: 2 },
  { player: "blue", column: 1 },
  { player: "red", column: 2 },
  { player: "blue", column: 0 },
  { player: "red", column: 1 },
  { player: "blue", column: 6 },
];

const TEST_WINNER_L_DIAG = [
  { player: "red", column: 0 },
  { player: "blue", column: 0 },
  { player: "red", column: 3 },
  { player: "blue", column: 0 },
  { player: "red", column: 0 },
  { player: "blue", column: 1 },
  { player: "red", column: 1 },
  { player: "blue", column: 2 },
  { player: "red", column: 1 },
  { player: "blue", column: 3 },
  { player: "red", column: 2 },
  { player: "blue", column: 6 },
];

const TEST_GAME_OVER = [
  { player: "red", column: 0 },
  { player: "blue", column: 1 },
  { player: "red", column: 2 },
  { player: "blue", column: 3 },
  { player: "red", column: 4 },
  { player: "blue", column: 5 },
  { player: "red", column: 6 },
  { player: "blue", column: 7 },
  { player: "red", column: 8 },
  { player: "blue", column: 9 },
  
  { player: "red", column: 1 },
  { player: "blue", column: 2 },
  { player: "red", column: 3 },
  { player: "blue", column: 4 },
  { player: "red", column: 5 },
  { player: "blue", column: 6 },
  { player: "red", column: 7 },
  { player: "blue", column: 8 },
  { player: "red", column: 9 },
  { player: "blue", column: 0 },

  { player: "red", column: 0 },
  { player: "blue", column: 1 },
  { player: "red", column: 2 },
  { player: "blue", column: 3 },
  { player: "red", column: 4 },
  { player: "blue", column: 5 },
  { player: "red", column: 6 },
  { player: "blue", column: 7 },
  { player: "red", column: 8 },
  { player: "blue", column: 9 },
  
  { player: "red", column: 0 },
  { player: "blue", column: 3 },
  { player: "red", column: 4 },
  { player: "blue", column: 1 },
  { player: "red", column: 2 },
  { player: "blue", column: 5 },
  { player: "red", column: 6 },
  { player: "blue", column: 7 },
  { player: "red", column: 8 },
  { player: "blue", column: 9 },

  
];

module.exports = {
  DEFAULTS,
  GAME_STATES,
  TEST_GAME_OVER,
  TEST_GAME_PLAYS,
  TEST_WINNER_COLUMN,
  TEST_WINNER_ROW,
  TEST_WINNER_L_DIAG,
  TEST_WINNER_R_DIAG,
  TEST_OUT_OF_TURN_PLAYS,
  TEST_INVALID_COLUMN
};
