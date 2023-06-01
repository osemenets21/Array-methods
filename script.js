// Finding the maximum element:
// Write a function that takes an array of numbers as an argument and returns the largest element in the array.

let numbers = [5,6,10,101,46,35,366,32];

function maxNumber(arr) {
  let maxEl = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > maxEl){
      maxEl = arr[i];
    }
  }
  return maxEl;
}

// _____________________________________________________________________________________

// Combining arrays:
// Write a function that takes two arrays as arguments and returns a new array containing all elements from both arrays. Output the result to the console.

// const firstArray = ['Oleh'];
const secondArray = ['Semenets'];

function concatArrays(firstArr, secondArr){
  let togetherArr = firstArr.concat(secondArr);
  return togetherArr;
}

console.log(concatArrays(firstArray, secondArray));

// _____________________________________________________________________________________

// Search for unique elements:
// Write a function that accepts a table of elements and returns a new table containing only unique elements (without repetition)

let numbers2 = [1,5,6,5,10,101,46,35,366,32];

function uniqueElements(numbers2) {
  return [...new Set(numbers2)];
}

// _____________________________________________________________________________________


// Sorting the array:
// Write a function that takes an array of numbers as an argument and returns a new array sorted by ascending order. Output the result to the console.

// Sort of Letters

let noSortArrLerters = ['a','b','r','d','z','c','w','n','q','u'];

function mySortArr(arr){
  let sortArr = arr.sort();
  return sortArr;
}

console.log(mySortArr(noSortArrLerters));

// Sort of numbers

let noSortArr = [45,12,50,7,5,34,355,23,678];

noSortArr.sort(function(a, b) {
  return a - b;
});

console.log(noSortArr);

// _____________________________________________________________________________________


// Finding the average value:
// Write a function that takes an array of numbers as an argument and returns the average of those numbers. Output the result to the console.

let arrOfNumbers = [45,12,50,7,5,34,355,23,678];

function averageValue(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const suma = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  const averageValue = Math.floor(suma / arr.length);

  return averageValue;
}

console.log(averageValue(arrOfNumbers));

// _____________________________________________________________________________________

// Array inversion:
// Write a function that accepts an array of elements and returns a new array containing the elements in reverse order. Output the result to the console.

let arrayOfNumbers = [45,12,50,7,5,34,355,23,678];

function reverseArray(arr){
  return arr.reverse();
}

console.log(reverseArray(arrayOfNumbers));

// _____________________________________________________________________________________

// Search for a specific item:
// Write a function that takes an array of elements and a specified value as arguments and returns true if the value is found in the array or false if the value is not present. Output the result to the console.

let arrayOfNumbers2 = [45,12,50,7,5,34,355,23,678];

function SearchNumber(arr, num){
  return arr.includes(num);
}

console.log(SearchNumber(arrayOfNumbers2, 999));

// _____________________________________________________________________________________

// Reverse array with for loop

const arrOfNumbers = [9,8,7,6,5,4,3,2,1,0];

function reverseArr(arr){
    let normalArr = [];

    for(let i = arr.length - 1; i >= 0; i--){
        normalArr.push(arr[i]);
    }
    return normalArr;
}

console.log(reverseArr(arrOfNumbers));

// _____________________________________________________________________________________

// Reverse of string

function reverseString(string){
    let arr =  string.split('');
    let rev = arr.reverse();
    let result = rev.join('')
    console.log(result);
}

reverseString('Oleh');


