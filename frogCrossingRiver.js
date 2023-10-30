/**
    A frog is crossing a river. The river is divided into some number of units,
    and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

    Given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone.
    Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

    If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units.
    The frog can only jump in the forward direction.

    Example 1:
    Input: stones = [0,1,3,5,6,8,12,17]
    Output: true
    Explanation:
    The frog can jump to the last stone by jumping 1 unit to the 2nd stone,
    then 2 units to the 3rd stone,
    then 2 units to the 4th stone,
    then 3 units to the 6th stone,
    4 units to the 7th stone,
    and 5 units to the 8th stone.
    
    Example 2:
    Input: stones = [0,1,2,3,4,8,9,11]
    Output: false
    Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.
*/

/**
 * @param {number[]} stones
 * @return {boolean}
 */

let k = 1;
var canCross = function(stones) {

    // get the furthest stone from the stones array for the valid nextMove.
    // const nextMove = stones.filter((x) => (x - k === k || x - k === k - 1 || x - k === k + 1)).pop();
    // const nextStone = stones.lastIndexOf(nextMove);
    // k = nextMove - k;
    // console.log('--------');
    // console.log(stones);
    // console.log(`nextMove: ${nextMove} nextStone: ${nextStone} k: ${k}`);

    // stones = stones.slice(nextStone, -1);
    // console.log(stones);

    // if(stones.length === 1) return true
    // canCross(stones);

    const jumps = stones.map((val, index, arr) => {
        return index < arr.length - 1 ? stones[index + 1] - val : 0;
    });

    console.log(jumps);

};

const stones = [0,1,3,5,6,8,12,17];
console.log(canCross(stones));


// iterations
// 1:   [1,3,5,6,8,12,17]; k = 1; looking for index: 1
// 2:   