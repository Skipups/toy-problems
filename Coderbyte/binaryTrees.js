//at most 2 children

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//Breadth-Frist Traversal
//start at root and explore the entire level before going down

function BFS(root) {
  let queue = [root];

  while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr.val);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
}

//time(n) space(n)
BFS(a);

//write a function that returns T or F
const BFSS = (root, elm) => {
  let queue = [root];

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.val == elm) return true;
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return false;
};

console.log(BFSS(a, 'z'));

console.log(BFSS(a, 'b'));

//return sum of all the values
const BFSum = (root) => {
  let queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr.val);
    sum += curr.val;
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return sum;
};

const one = new Node(1);
const bb = new Node(2);
const cc = new Node(3);
const dd = new Node(4);
const ee = new Node(5);
const ff = new Node(6);

one.left = bb;
one.right = cc;
bb.left = dd;
bb.right = ee;
cc.right = ff;

console.log(BFSum(one));
