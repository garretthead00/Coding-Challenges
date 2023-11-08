/*
You're creating a game with some amusing mini-games, and you've decided to make a simple variant of the game Mahjong.

In this variant, players have a number of tiles, each marked 0-9. The tiles can be grouped into pairs or triples of the same tile. For example, if a player has "33344466", the player's hand has a triple of 3s, a triple of 4s, and a pair of 6s. Similarly, "55555777" has a triple of 5s, a pair of 5s, and a triple of 7s.

A "complete hand" is defined as a collection of tiles where all the tiles can be grouped into any number of triples (zero or more) and exactly one pair, and each tile is used in exactly one triple or pair.

Write a function that takes a string representation of a collection of tiles in no particular order, and returns true or false depending on whether or not the collection represents a complete hand.

Any number of triples (zero or more) and exactly one pair
tiles1 = "11133555"           # True.  111 33 555
tiles2 = "111333555"          # False. There are three triples, 111 333 555 but no pair.
tiles3 = "00000111"           # True.  000 00 111. Your pair and a triplet can be of the same value
tiles4 = "13233121"           # True.  Tiles are not guaranteed to be in order
tiles5 = "11223344555"        # False. There cannot be more than one pair
tiles6 = "99999999"           # True.  You can have many of one tile
tiles7 = "999999999"          # False.
tiles8 = "9"                  # False.
tiles9 = "99"                 # True.  One pair.
tiles10 = "000022"            # False.
tiles11 = "888889"            # False. There cannot be any tiles left over.
tiles12 = "889"               # False. There cannot be any tiles left over.
tiles13 = "88888844"          # True.  Two triples and one pair
tiles14 = "77777777777777"    # True.  Four triples and one pair
tiles15 = "1111111"       	  # False.
tiles16 = "1111122222"        # False.

complete(tiles1)  => True
complete(tiles2)  => False
complete(tiles3)  => True
complete(tiles4)  => True
complete(tiles5)  => False
complete(tiles6)  => True
complete(tiles7)  => False
complete(tiles8)  => False
complete(tiles9)  => True
complete(tiles10) => False
complete(tiles11) => False
complete(tiles12) => False
complete(tiles13) => True
complete(tiles14) => True
complete(tiles15) => False
complete(tiles16) => False

Complexity Variable
N - Number of tiles in the input string
*/

const tiles1 = "11133555";
const tiles2 = "111333555";
const tiles3 = "00000111";
const tiles4 = "13233121";
const tiles5 = "11223344555";
const tiles6 = "99999999";
const tiles7 = "999999999";
const tiles8 = "9";
const tiles9 = "99";
const tiles10 = "000022";
const tiles11 = "888889";
const tiles12 = "889";
const tiles13 = "88888844";
const tiles14 = "77777777777777";
const tiles15 = "1111111";
const tiles16 = "1111122222";

const defaultHands = [
    tiles1,
    tiles2,
    tiles3,
    tiles4,
    tiles5,
    tiles6,
    tiles7,
    tiles8,
    tiles9,
    tiles10,
    tiles11,
    tiles12,
    tiles13,
    tiles14,
    tiles15,
    tiles16
]

function checkCompleteHand(tiles) {
    
    const hand = [...tiles].sort().reduce((a, b) => {
        a[b] = a[b] ? a[b] + 1 : 1;
        return a
    }, {});

    const handValues = Object.values(hand);

    // Cannot have singles
    if(handValues.filter((x) => x === 1).length > 0) { 
        console.log('Cannot have singles');
        return false
    }

    // Can only have 1 pair
    if(handValues.filter((x) => (x === 2 || x % 3 === 2)).length !== 1){
        console.log('Can only have 1 pair');
        return false
    } 


    // Without a remaining pair, if the any of the remaining cannot make a pair when split
    if(
        handValues.filter((x) => x === 2).length !== 0 &&
        handValues.filter((x) => (x !== 2 && x % 3 === 1)).length > 0
    ) {
        console.log('Without a remaining pair, if the any of the remaining cannot make a pair when split');
        return false
    }

    return true
}

/**
 * User interaction with the game
 * 
 * Present the user with the Rules of the game and the options to select.
 * If they want to add custom input, let them.
 * Check each round until quiting the game.
 */


/**
 * Start the app
 */
function start(){
    const gameRules = "";
    const userOptions = [];

    // Display the game rules
    console.log('Count Tiles');

    console.log(`
        How it works

        Players have a number of tiles, each marked 0-9. The tiles can be grouped into pairs or triples of the same tile.
        For example, if a player has "33344466", the player's hand has a triple of 3s, a triple of 4s, and a pair of 6s. Similarly, "55555777" has a triple of 5s, a pair of 5s, and a triple of 7s.
        
        A "complete hand" is defined as a collection of tiles where all the tiles can be grouped into any number of
        triples (zero or more) and exactly one pair, and each tile is used in exactly one triple or pair.

        Write a function that takes a string representation of a collection of tiles in no particular order, and returns true or false depending on whether or not the collection represents a complete hand.

        Any number of triples (zero or more) and exactly one pair
        tiles1 = "11133555"           # True.  111 33 555
        tiles2 = "111333555"          # False. There are three triples, 111 333 555 but no pair.
        tiles3 = "00000111"           # True.  000 00 111. Your pair and a triplet can be of the same value
        tiles4 = "13233121"           # True.  Tiles are not guaranteed to be in order
        tiles5 = "11223344555"        # False. There cannot be more than one pair
        tiles6 = "99999999"           # True.  You can have many of one tile
        tiles7 = "999999999"          # False.
        tiles8 = "9"                  # False.
        tiles9 = "99"                 # True.  One pair.
        tiles10 = "000022"            # False.
        tiles11 = "888889"            # False. There cannot be any tiles left over.
        tiles12 = "889"               # False. There cannot be any tiles left over.
        tiles13 = "88888844"          # True.  Two triples and one pair
        tiles14 = "77777777777777"    # True.  Four triples and one pair
        tiles15 = "1111111"       	  # False.
        tiles16 = "1111122222"        # False.
        
        complete(tiles1)  => True
        complete(tiles2)  => False
        complete(tiles3)  => True
        complete(tiles4)  => True
        complete(tiles5)  => False
        complete(tiles6)  => True
        complete(tiles7)  => False
        complete(tiles8)  => False
        complete(tiles9)  => True
        complete(tiles10) => False
        complete(tiles11) => False
        complete(tiles12) => False
        complete(tiles13) => True
        complete(tiles14) => True
        complete(tiles15) => False
        complete(tiles16) => False
        
        Complexity Variable
        N - Number of tiles in the input string
    `);
    console.log("Start the app and check the hands by inputing the tile number option or submitting your own.");
    console.log(`Example input:
    
        1. To check one of the provided tiles options. tiles1 
            node CountTiles.js 1

        2. For custom input, add the tiles as an arguement
            node CountTiles.js 123456
    `);

    const input = process.argv.pop();
    console.log(`validating hand for ${input}...`);
    const validatedInput = validateInput(input);

    if(!isNaN(validatedInput)) {
        console.log(`checking hand for ${validatedInput}...`);
        console.log(`is complete hand: ${checkCompleteHand(validatedInput)}`);
    } else {
        console.log(validatedInput)
    }
    
}

function validateInput(input){
    if(input === "") { return defaultHands[0] }

    if(isNaN(input)) { return "Invalid input. Must be a number" }

    if(input >= 1 && input <= 16) { return defaultHands[input - 1]}

    return input
}

start()