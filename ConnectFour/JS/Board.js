const { logger } = require("./logger")
class Slot {
    constructor(column, row){
        this.column = column
        this.row = row
        this.isOccupied = false
        this.occupiedBy = ""
    }
}

class Board {
    constructor(height = 10, width = 10, slots = []){
        this.height = height,
        this.width = width
        this.slots = slots
        this.slotsFilled = 0;
    }

    static build(height, width){
        let slots = [];
        let slowRow = []
        for(let x = 0; x < width; x++) {
            for(let y = 0; y < height; y++) {
                const slot = new Slot(x,y);
                slowRow.push(slot);
            }
            slots.push(slowRow);
            slowRow = [];
        }

        const board = new Board(height, width, slots);
        return board
    }



    fillSlot(column, player) {
        // logger('fillSlot', {
        //     column,
        //     player,
            
        //     playCount: this.slotsFilled
        // })
        const slotToFill = this.getnextAvailableSlotInColumn(column)
        
        if(!isNaN(slotToFill)) {
            this.slots[column][slotToFill].isOccupied = true;
            this.slots[column][slotToFill].occupiedBy = player;
            ++this.slotsFilled;
            return { column, row: slotToFill, player, success: true}
        }
        
        return { column, row: undefined, player, success: false}
    }
     

    // Return the first available slot in the column.
    // Lower row in the column
    getnextAvailableSlotInColumn(column){

        // column is full return FAIL
        if(this.slots[column][0].isOccupied) { return undefined }

        // Find the first available slot in the column and return it.
        const findFirstFilledSlot = this.slots[column].findIndex((element) => element.isOccupied);
        const nextAvailable = findFirstFilledSlot === 0
        ? undefined
        : findFirstFilledSlot === -1
        ? this.slots[column].length - 1
        : findFirstFilledSlot - 1
        
        // logger('getnextAvailableSlotInColumn', {
        //     column,
        //     findFirstFilledSlot,
        //     nextAvailable,
        //     slots:this.slots[column]
        // })
        return nextAvailable 
    }

    getAssociatedRow(slot, length) {
        const {
            column,
            row
        } = slot;
        const associatedRow = [];

        for (let i = 1; i <= length; i++) {
            if (
                column - i >= 0 && column - i < this.width &&
                row - i >= 0 && row - i < this.height
            ) {
                associatedRow.push(this.slots[column - i][row]);
            }
        }
        associatedRow.push(this.slots[column][row]);
        for (let i = 1; i <= length; i++) {
            if (
                column + i >= 0 && column + i < this.width &&
                row + i >= 0 && row + i < this.height
            ) {
                associatedRow.push(this.slots[column + i][row]);
            }
        }

        return associatedRow;
    }
    getAssociatedColumn(slot, length) {
        const {
            column,
            row
        } = slot;
        const associatedColumn = [];

        for (let i = 1; i <= length; i++) {
            if (
                column - i >= 0 && column - i < this.width &&
                row - i >= 0 && row - i < this.height
            ) {
                associatedColumn.push(this.slots[column][row-i]);
            }
        }
        associatedColumn.push(this.slots[column][row]);
        for (let i = 1; i <= length; i++) {
            if (
                column + i >= 0 && column + i < this.width &&
                row + i >= 0 && row + i < this.height
            ) { 
                associatedColumn.push(this.slots[column][row+i]);
            }
        }
        return associatedColumn;
    }
    getAssociatedLeftDiagonal(slot, length) {
        const {
            column,
            row
        } = slot;
        const associatedLeftDiag = [];

        for (let i = 1; i <= length; i++) {
            if (
                column - i >= 0 && column - i < this.width &&
                row - i >= 0 && row - i < this.height
            ) {
                associatedLeftDiag.push(this.slots[column - i][row - i]);
            }
        }
        associatedLeftDiag.push(this.slots[column][row]);
        for (let i = 1; i <= length; i++) {
            if (
                column + i >= 0 && column + i < this.width &&
                row + i >= 0 && row + i < this.height
            ) {
                associatedLeftDiag.push(this.slots[column + i][row + i]);
            }
        }

        return associatedLeftDiag;
    }
    getAssociatedRightDiagonal(slot, length) {
        const {
            column,
            row
        } = slot;
        const associatedRightDiag = [];

        for (let i = 1; i <= length; i++) {
          if (
            column - i >= 0 &&
            column - i < this.width &&
            row + i >= 0 &&
            row + i < this.height
          ) {
            associatedRightDiag.push(this.slots[column - i][row + i]);
          }
        }
      
        associatedRightDiag.push(this.slots[column][row]);
      
        // get top right portion
        for (let i = 1; i <= length; i++) {
          if (
            column + i >= 0 &&
            column + i < this.width &&
            row - i >= 0 &&
            row - i < this.height
          ) {
            associatedRightDiag.push(this.slots[column + i][row - i]);
          }
        }
      
        return associatedRightDiag;
    }

    displayBoard(){
        const displayBoard = this.slots.map((column) => {
            return column.map((slot) => `[${slot.column}, ${slot.row}] - ${slot.occupiedBy || "..."}`)
        })
        console.log('----displayBoard----');
        console.log(displayBoard);
    }

    displayBoardV2(){
        const board = [];
        let row = [];
        for(let y = 0; y < this.slots[0].length; y++){
            for(let x = 0; x < this.slots.length; x++){
                row.push(`[${this.slots[x][y].column}, ${this.slots[x][y].row}] - ${this.slots[x][y].occupiedBy || "..."}`)
            }
            board.push(row.join("\t| "));
            row = [];
        }
        console.log("\n\n");
        console.log('----displayBoardV2----');
        console.log(board);
    }

}

module.exports = {
    Slot,
    Board, 
}