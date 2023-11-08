/**
 * 
 
    Build a ConnectFourJS game with both PvP and PvC modes, presented on the client-browser for user experience.

    Given:
    Board of size [LENGTH x WIDTH]
    Number of players P
    Sequence length SEQ.

    Each player is given a unique color.
    Players take turns dropping a disc on a column. This disc drops to the lowest available slot on the board.
    If any player gets a sequence of their matching colors with length SEQ, then they are the winner.
    The game will continue until there is a winner or the board is full.

 */

const { ConnectFourGame } = require("./Game");
const {
  DEFAULTS,
  GAME_STATES,
  TEST_GAME_OVER,
  TEST_GAME_PLAYS,
  TEST_INVALID_COLUMN,
  TEST_OUT_OF_TURN_PLAYS,
  TEST_WINNER_COLUMN,
  TEST_WINNER_L_DIAG,
  TEST_WINNER_R_DIAG,
  TEST_WINNER_ROW,
} = require("./data");

function startGame() {

    // Set up game config, players, build board
  const players = ['red','blue'];
  ConnectFourGame.simulatedGame({plays: TEST_GAME_OVER, players, width: DEFAULTS.BOARD_WIDTH, height: DEFAULTS.BOARD_HEIGHT, seq: DEFAULTS.SEQ})
}


module.exports = {
  startGame,
};