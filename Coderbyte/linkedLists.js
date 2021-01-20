// don't require contiguous in memory

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  append(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    return;
  }

  contains(val) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }
  print() {
    let str = '';
    let curr = this.head;
    while (curr !== null) {
      str += curr.val + '->';
      curr = curr.next;
    }
    console.log(str);
  }
}
const list = new SLL();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print();
console.log(list.contains('z'));

//recursive linked list methods

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }
    this._append(val, curr.next);
  }
  print() {
    const output = this._print(this.head);
    console.log(output);
  }
  _print(curr) {
    if (curr === null) return '';
    return curr.val + '->' + this._print(curr.next);
  }
  contains(val) {
    return this._contains(val, this.head);
  }
  _contains(val, curr) {
    if (curr == null) return false;
    if (curr.val === val) return true;
    return this._contains(val, curr.next);
  }
  addEntireList() {
    let sum = null;
    sum = this._addEntireList(sum, this.head);
    return sum;
  }
  _addEntireList(sum, curr) {
    if (curr == null) return sum;
    sum += curr.val;
    return this._addEntireList(sum, curr.next);
  }
}

const lists = new LinkedList();
lists.append(11);
lists.append(7);
lists.append(10);
lists.append(2);
lists.print();
// console.log(lists.addEntireList());

//iterative solution
const sumList = (head) => {
  let sum = 0;
  let curr = head;
  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
};
//time o(n), space o(1)

// console.log(sumList(lists.head));

//recursive solution
const recursSum = (head) => {
  if (head === null) return 0;
  return head.val + recursSum(head.next);
};
//time o(n), space o(n)
// console.log(recursSum(lists.head));
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
a.next = b;
b.next = c;
c.next = d;
let aList = a;
const deleteNode = (head, val) => {
  if (head.val === val) return head.next;
  let curr = head;
  let prev = null;

  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
    }

    prev = curr;
    curr = curr.next;
  }
  return head;
};
//time O(n), space O(1)

const print = (head) => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
};
// deleteNode(aList, 'c');
// print(aList);
// let newhead = deleteNode(aList, 'a');
// print(newhead);

//recursive delete function

const recrDelete = (head, val) => {
  if (head.val === val) return head.next;
  _recrDelete(head, null, val);
  return head;
};
const _recrDelete = (curr, prev, val) => {
  if (curr === null) return;
  if (curr.val === val) {
    prev.next = curr.next;

    return;
  }

  return _recrDelete(curr.next, curr, val);
};
//time O(n) space O(n),at worst n stack frames before bottoming out
// recrDelete(aList, 'c');
//print(aList);
// let newhead = recrDelete(aList, 'a');
// print(newhead);

//reversing linked list
const reverse = (head) => {
  if (head === null || head.next === null) return head;
  let curr = head;
  let prev = null;
  let temp;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
//o(n) time, o(1)space
console.log(aList);
console.log(reverse(aList));

const reverseRecursive = (curr, prev = null) => {
  if (curr === null) {
    return prev;
  }
  let next = curr.next;
  curr.next = prev;

  return reverseRecursive(next, curr);
};
