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
function findWayOut( maze, x=0, y=0, path = '', paths=[]) {
  if (x < 0 || y < 0 || x >= maze.length || y >= maze[x].length) {
    return false;
  }
  let value = maze[x][y];
  
  const newMaze = maze.map((row, index) => {
    if(index !== x) {
      return row;
    }
    return row.map((value, index) => {
      if(index !== y) {
        return value;
      }
      return 'v'
    })
  })

  if (value === '*' || value === 'v') {
    return false;
  }
  if (value === 'e') {
    paths.push(path);
    return paths;
  }

  let up = findWayOut(newMaze, x-1, y, path+'U', paths);
  let down = findWayOut(newMaze, x+1, y, path+'D', paths);
  let left = findWayOut(newMaze, x, y-1, path+'L', paths);
  let right = findWayOut(newMaze, x, y+1, path+'R', paths);

  return left || right || up || down;
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

console.log(findWayOut(bigMaze))


//Problem 10
var allAnagrams = function(string) {

  var uniqueOutput = {};

  (function anagram(ana, str) {

    if (str === '') {
      uniqueOutput[ana] = 1;
    }
    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);
  return Object.keys(uniqueOutput);
};

// 

