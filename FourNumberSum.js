/**
 * FOUR NUMBER SUM
 * 
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 * The function should find all quadruplets in the array that sum up to the target sum and return a 2D array of all these quadruplets in no particular order.
 * If no four numbers exist, return empty array
 * 
 */
 const SET_MAX_SIZE = 4;
function FourNumberSum(array, targetSum) {




    // validateStack(array, targetSum)

    
    let sumStack = [];
    let results = [];
    arr.sort();
    console.log('---- validateStack -----');
    console.log('array ', array);
    console.log('target ', targetSum);
    // for(const element of array) {
    //     console.log(`starting traversal of: ${element}`)
    //     sumStack = [];
    //     results.push(traverseStack(sumStack,array,targetSum, element));
    //     console.log('traversal results');
    //     console.log(`number: ${element} | stack: ${getStackValue(sumStack)} | stackSize: ${sumStack.length} | target: ${targetSum} | array ${array}`);
    //     console.log(results);
    //}

    results.push(traverseStack(sumStack,array,targetSum, array[0]));
    return results
    


}

function traverseStack(stack, array, target, number) {

    let thisArr = [...array];
    let thisStack= [...stack];
    let res = [];

    // if target > 0 & stack size < SET_MAX_SIZE
    console.log('---- traverse stack -----');
    console.log(`number: ${number} | stack: ${getStackValue(thisStack)} | stackSize: ${thisStack.length} | target: ${target} | array ${thisArr}`);
    
    // Condition 1:
    // SUCCESS: If target is zero and the stack size is at max
    // FAIL:    If target is zero but, the stack size is wrong
    if(target === 0){
        return thisStack.length === SET_MAX_SIZE ? thisStack : []
    }
    // Condition 2:
    // FAIL:    IF target is not 0 and the max stack size has been reached
    if(thisStack.length === SET_MAX_SIZE) { 
        console.log('FAIL:  IF target is not 0 and the max stack size has been reached')
        return [] }


    console.log('pushing to stack...');
    thisStack.push(number);
    target -= number;
    
    const newArr = thisArr.filter((x) => x !== number);
    console.log('filtered: ', newArr)
    for(const element of newArr) {
        const temp = traverseStack(thisStack,newArr,target, element)
        if(temp && temp.length > 0 ) { res.push(temp) }
    }
    return res
}

function getStackValue(stack) {
    return stack.reduce((acc, value, index, arr) => {
        return acc + value
    }, 0);
}

const arr = [7, 6, 4, -1, 1, 2]
const targetSum = 16;
const result = FourNumberSum(arr, targetSum);
console.log('----- FOUR NUMBER SUM ------');
console.log(result);