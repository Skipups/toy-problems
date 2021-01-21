//at most 2 children

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

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
// BFS(a);

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

// console.log(BFSS(a, 'z'));

// console.log(BFSS(a, 'b'));

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

//Depth first traversal use stack instead of queue!
//  add R child before L to see L to R, L will be on top and explored first
//order => a,b, d, e, c, f
const DFS = (root) => {
  let stack = [root];

  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr.val);
    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }
};
//time o(n), o(n) space

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

console.log(DFS(a));

//DFS recursivly
const recDFS = (root) => {
  //if tree empty
  if (root === null) {
    return;
  }
  console.log(root.val);
  recDFS(root.left);
  recDFS(root.right);
};
//o(n) time and o(n) space

//         a
//       /   \
//     b      c
//   /  \       \
// d     e        f
//pre-order- print parent before children, => self, left, right
// a, b, d, e, c, f
const preOrderDFS = (root) => {
  //if tree empty
  if (root === null) {
    return;
  }
  console.log(root.val);
  preOrderDFS(root.left);
  preOrderDFS(root.right);
};
console.log('preOrderDFS:', preOrderDFS(a));

//post-order- print children before parent, => left, right, self
// d,e,b, f, c, a
const postOrderDFS = (root) => {
  //if tree empty
  if (root === null) {
    return;
  }

  postOrderDFS(root.left);
  postOrderDFS(root.right);
  console.log(root.val);
};
console.log('postOrderDFS:', postOrderDFS(a));

//in-order- print a left child, self, a right child before parent, => left, self, right
// d,b,e, a, c, f
const inOrderDFS = (root) => {
  if (root === null) {
    return;
  }

  inOrderDFS(root.left);
  console.log(root.val);
  inOrderDFS(root.right);
};
console.log('inOrderDFS:', inOrderDFS(a));

//pre-order: self, left, right // regular depthFirst algo
//post-order: left, right, self
//in-order: left, self, right

//sum using DFS pre-order
const sumTree = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    let curr = stack.pop();
    sum += curr.val;
    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }
  return sum;
};

//sum using recDFS in-order
const sumrecDFSinorder = (root) => {
  if (root === null) {
    return 0;
  }

  return sumrecDFSinorder(root.left) + root.val + sumrecDFSinorder(root.right);
};
