function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
  if (height >= 1) {

    // Move a tower of height-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);

    // Move the remaining disk to the destination peg.
    console.log('Move disk from Tower ', srcP, ' to Tower ', desP);

    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
    stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
  }
  
  return;
}
//O()
// stepsToSolveHanoiT(5, "A", "C", "B");



//recursion 1-7 into interative
function countSheep (num) {
  let count = 0;
  for (let i =1; i <= num; i++) {
    count++;
  }
  return count;
}
//O(n)
// console.log(countSheep(5))

function powerCalculator (int, exp) {
  console.log(Math.pow(int, exp));
}
//O
// powerCalculator(10, 3)

function reverseString(str) {
  return str.split('').reverse().join('');
  
}
//O(n)
// console.log(reverseString('hello'))

function nthTriangleNum(num) {
  total = 0;
  for(let i= 1; i <= num; i++) {
    total += i;
  }
  return total
}
//O(n)
// console.log(nthTriangleNum(5))

function stringSplitter(str) {
  let split = str.split('/'). join(', ');
  console.log(split);
}
//O(n)
// stringSplitter('10/21/1999')

function fib(num) {
  let a = 1;
  let b = 0;
  let temp;

  while( num > 0) {
    temp = a;
    a += b;
    b = temp;
    num --;
  }
  return b;
}
//O(n)
// console.log(fib(7))

function factorial(num) {
  if(num ===0 || num ===1) return 1;

  for(let i = num-1; i>=1; i--) {
    num*= i;
  }
  return num;
}

// console.log(factorial(10));