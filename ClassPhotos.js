/**
 *
 * We are given two non-empty arrays of positive integers:
 * the first is going to represent the heights of students wearing red shirts and the second is going to represent the heights of students wearing blue shirts.
 * The two arrays will always have the same length.
 *
 * We are asked to write a function that is going to find out if we can take a photo of these students that satisfies the following constraints:
 * 1. All the students that are wearing red shirts must be in the same row.
 * 2. All of the students that are wearing blue shirts must be in the same row.
 * 3. The photo must have exactly two rows and the two rows must have the same number of students in them.
 * 4. Every student in the front row must be shorter than the student directly behind them in the back row.
 * 5. The function is going to arrange the students and return true if we can take a photo that follows these constraints; otherwise return false.
 *
 *
 * EXAMPLE
 *      input:
 *          redShirts = [5,8,1,3,4]
 *          blueShirts = [6,9,3,4,6]
 *
 *      output: true
 *
 */

function classPhotos(redShirts, blueShirts) {
  if (redShirts.length !== blueShirts.length) return false;
  redShirts.sort();
  blueShirts.sort();
  
  const redFront = redShirts.every((shirt, index, arr) => {
    return shirt < blueShirts[index];
  });
  
  const blueFront = blueShirts.every((shirt, index, arr) => {
    return shirt < redShirts[index];
  });

  console.group("----- Class Photos ----");
  console.log("redShirts: ", redShirts);
  console.log("redFront: ", redFront);
  console.log("blueShirts: ", blueShirts);
  console.log("blueFront: ", blueFront);
  console.log("filterShortest: ", filterShortest);
  console.groupEnd();

  return redFront || blueFront;
}

const redShirts = [5, 8, 1, 3, 4]; //[5,8,1,4]
const blueShirts = [6, 9, 2, 4, 5]; //[6,9,3,4,6]

const canTakePhoto = classPhotos(redShirts, blueShirts);
console.log(`Can take class photos? ${canTakePhoto}`);
