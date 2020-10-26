//problem 1
function countingSheep(num) {
  if(num ===0) {
    return console.log("All sheep jumper over the fence");
  }

  console.log(`${num}, Another sheep jumping over the fence`)

  countingSheep(num - 1);
}

// countingSheep(5);

//problem 2
function powerCalculator(int, exp) {
  if(exp < 0) return 'exponent should be greater then 0';
  if(exp === 0) return 1;

  return int * powerCalculator(int, exp -1);
}

// console.log(powerCalculator(10, 3))


//problem 3
function reverseString(str) {
  if( str === '') return '';
  
return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString('welcome'));

//problem 4
function nthTriangleNum(num) {
  if(num ===1) return 1;

  return num + nthTriangleNum(num - 1);
}

// console.log(nthTriangleNum(4));

//problem 5
function stringSplitter(str, splitter, arr=['']) {
  if (str.length ===0) {
    return arr;
  }
  if (str[0] ===splitter) {
    arr.push('');
  }
  else {
    arr[arr.length - 1] += str[0];
  }

  return stringSplitter(str.slice(1), splitter, arr);
}

// console.log(stringSplitter('10/21/1999', '/'))

//problem 6
function fib(n, results =['']) {
  if (n === 1){
    return [1, 1]
  }
  results = fib(n-1);
  results.push(results[n -1] + results[n -2]);
  return results
}

// console.log(fib(7))

//problem 7
function factorial(i) {
  if( i == 1) {
    return 1;
  }
  return i * factorial(i - 1);
}

// console.log(factorial(5))

//problem 8 
function findWayOut( maze, vert =0, horiz =0, path = '') {
  if (maze[vert][horiz] === 'e') {
    return `Path to end: ${path}`;
  }


  const right = maze[vert][horiz +1];
  if(right && right !== '*'){
    horiz += 1;
    path += 'R';
    return findWayOut(maze, vert, horiz, path);
  }

  const down = maze[vert +1][horiz];
  if(down && down !== '*'){
    vert += 1;
    path += 'D';
    return findWayOut(maze, vert, horiz, path);
  }
  
  const left = maze[vert][horiz -1];
  if(left && left !== '*') {
    maze[vert][horiz] = '*';
    horiz -= 1;
    path += 'L';
    return findWayOut(maze, vert, horiz, path);
  }

  const up = maze[vert -1][horiz];
  if(up && up !== '*') {
    maze[vert][horiz] = '*';
    vert -= 1;
    path += 'U';
    return findWayOut(maze, vert, horiz, path);
  }
  
}

let mySmallMaze = [
  [' ', '*', 'e'],
  [' ', '*', ' '],
  [' ', ' ', ' ']
];

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', ' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', '*', ' ', ' '],
  [' ', '*', ' ', ' ', '*', '*', ' '],
  [' ', ' ', '*', '*', ' ', ' ', 'e']
];

// console.log(findWayOut(mySmallMaze))


//Problem 10
var allAnagrams = function(string) {

  var uniqueOutput = {};

  (function anagram(ana, str) {

    // could have also written this as: if(!str)....
    if (str === '') {
      uniqueOutput[ana] = 1;
    }
    //recursive call for the length of the anagram.
    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);
  return Object.keys(uniqueOutput);
};

// console.log(allAnagrams('east'));
