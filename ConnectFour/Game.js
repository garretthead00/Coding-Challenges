const { Board } = require("./Board");
const { logger } = require("./logger");

const GAME_STATES = {
    WINNING: "winning",
    GAME_OVER: "game over",
    CONTINUE: "continue",
};

class ConnectFourGame {
    constructor(players, boardWidth, boardHeight, sequenceCount){
        this.players = players
        this.boardWidth = boardWidth
        this.boardHeight = boardHeight
        this.sequenceCount = sequenceCount
        this.gameState = GAME_STATES.CONTINUE
        this.playCount = 0
        this.board = Board.build(boardHeight, boardWidth)
        this.playerTurn = players
    }

    static simulatedGame(game) {
        const {
            plays,
            players,
            width,
            height,
            seq
        } = game;

        const connectFourGame = new ConnectFourGame(players, width, height, seq)
        
        for(let i = 0; i < plays.length; i++) {
            console.group(`------ #### START OF PLAY COUNT ${i + 1} -----`);
            console.log(`playerTurn: ${connectFourGame.playerTurn[0]} for play: ${plays[i].player}`)
            
            // Check player turn and validate column
            if(
                connectFourGame.gameState === GAME_STATES.CONTINUE &&
                connectFourGame.playerTurn[0] === plays[i].player &&
                plays[i].column >= 0 &&
                plays[i].column < width &&
                !isNaN(plays[i].column)
            ) {
                const playerMove = connectFourGame.playTurn(plays[i].player, plays[i].column);
                connectFourGame.setGameState(playerMove);
                console.log(`${plays[i].player} played slot [${playerMove.row}, ${playerMove.column}]`)
                // logger("Simulate Game", {
                //   playerMove,
                //   playerTurn: connectFourGame.playerTurn[0],
                //   gameState: connectFourGame.gameState,
                //   playCount: connectFourGame.board.slotsFilled,
                // });
                connectFourGame.rotatePlayerTurn();
            } else {
                console.log(`${plays[i].player} made an invalid move.`);
            }

            if(connectFourGame.gameState === GAME_STATES.WINNING) {
                console.log(`${plays[i].player} won the game!!!`);
                break;
            }
            
            if(connectFourGame.gameState === GAME_STATES.GAME_OVER) {
                console.log(`game over...`);
                break;
            }
            console.log(`continue...`);
            console.log(`------ #### END OF PLAY COUNT ${i + 1} -----`);
            console.groupEnd();
        }

        connectFourGame.board.displayBoardV2();
    }

    playTurn(player, column) {
        const playerMove = this.board.fillSlot(column, player);
        this.playCount++;
        // logger("playTurn", {
        //   playerMove,
        //   playCount: this.board.slotsFilled,
        //   player,
        //   column,
        // });
        return playerMove;
    }

    setGameState(lastMove) {
        logger('setGameState', {
            lastMove,
            gameState: this.gameState
        })
          if(this.winningSequenceFound(lastMove)){
            console.log('winning state')
            this.gameState = GAME_STATES.WINNING
          } else if (this.isBoardFull()) {
            console.log('boardFull')
            this.gameState = GAME_STATES.GAME_OVER
          } else {
            this.gameState = GAME_STATES.CONTINUE
          }
    }

    winningSequenceFound(lastMove) {
        const sequenceString = Array.from(
            { length: this.sequenceCount },
            () => lastMove.player
          ).join("");
        const matchRow = this.board.getAssociatedRow(lastMove, this.sequenceCount).map((slot) => slot.occupiedBy).join('');
        const matchColumn = this.board.getAssociatedColumn(lastMove, this.sequenceCount).map((slot) => slot.occupiedBy).join('');
        const matchLeftDiag = this.board.getAssociatedLeftDiagonal(lastMove, this.sequenceCount).map((slot) => slot.occupiedBy).join('');
        const matchRightDiag = this.board.getAssociatedRightDiagonal(lastMove, this.sequenceCount).map((slot) => slot.occupiedBy).join('');

        return (
            matchRow.includes(sequenceString) ||
            matchColumn.includes(sequenceString) ||
            matchLeftDiag.includes(sequenceString) ||
            matchRightDiag.includes(sequenceString)
          )
    }

    isBoardFull() {
        logger('isBoardFull', {
            playCount: this.playCount,
            width: this.boardWidth,
            height: this.boardHeight
        });
       return (this.playCount == this.boardWidth * this.boardHeight)
    }

    rotatePlayerTurn(){
        const currentTurn = this.playerTurn.shift();
        this.playerTurn.push(currentTurn);
    }

}

module.exports = {
    ConnectFourGame
}