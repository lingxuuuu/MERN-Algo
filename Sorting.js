// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/

// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
  var len = arr.length; // fix the length
  for (var i = 0; i < len; i++) {
    // loop over every element
    for (var j = 0; j < len - i - 1; j++) {
      // go no further than length - i
      // compare and classic swap
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // return the given array
  return arr;
}

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// Selection Sort
//S

// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr) {
  var len = arr.length; // fix the length
  for (var i = 0; i < len; i++) {
    var min = i; // arbitrarily set i as min
    for (var j = i + 1; j < len; j++) {
      // loop from i
      if (arr[min] > arr[j]) {
        min = j;
      }
      if (min !== i) {
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
  }
  return arr;
}

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png

const numbers1 = [9, 6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    while (i >= 0 && arr[i - 1] > arr[i]) {
      //swap
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      i--;
    }
  }
  return arr;
}
console.log(insertionSort(numbers1));
console.log(insertionSort(numbers2));
