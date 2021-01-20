function factorial(num) {
  if (num < 2) {
    return 1;
  }
  return n * factorial(num);
}

const memo = function (fn) {
  let cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const factorial10 = memo(factorial);
factorial10(10);

//bubble sort
function bubble(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwaps = true;
    for (let j = 1; j < i; j++) {
      if (arr[j - 1] > arr[j]) {
        //swap
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps === true) {
      break;
    }
  }
  return arr;
}

function insertS(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

//arry.sort usually marge sort
function mergeS(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeS(arr.slice(0, middle));
  let right = mergeS(arr.slice(middle));

  return stitch(left, right);
}

function stitch(l, r) {
  let sorted = [];
  let lp = 0;
  let rp = 0;
  while (lp < l.length && rp < r.length) {
    if (l[lp] < r[rp]) {
      sorted.push(l[lp]);
      lp++;
    } else {
      sorted.push(r[rp]);
      rp++;
    }
  }
  while (lp < l.length) {
    sorted.push(l[lp]);
    lp++;
  }
  while (rp < l.length) {
    sorted.push(r[rp]);
    rp++;
  }

  return newArr;
}

//if 2 sorted arrays how do you find the median, middle index
//[1,5,8,9]
//[2,3,7,10]
//similar to stitch

//quick sort- when merge isn't used, quick sort it
//choose a pivot, sort in relation to the pivot, here we choose last element as pivot
//can get n
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let rest = arr.slice(0, arr.length - 1);
  let left = [];
  let right = [];
  rest.forEach((num) => (num >= pivot ? right.push(num) : left.push(num)));

  return quickSort(left).concat(pivot).concat(quickSort(right));
}
quickSort([2, 3, 4, 1, 2, 5]);

// datastructures
//set- gaurante of order, no durplicates
//Map- keys are a set (unique) but values can be duplicates, no order
//stack- last-in-first-out
//queue- first-in-first-out

//arrays optomize for get and not delete colapsing an array
class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(val) {
    this.data[this.length] = val;
    this.length++;
  }
  pop() {
    let removed = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removed;
  }
  get(index) {
    return this.data[index];
  }

  delete(index) {
    let remove = this.data[index];
    this._collapsTo(index);
    return remove;
  }
  _collapsTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

//linked lists, get expensive add and delete easy

//2ality.com
