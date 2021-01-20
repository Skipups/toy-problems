// //uses recursion

// //DFS- PreOrder

//   //   10
//   //   / \
//   //  6  15
//   // / \  \
//   // 3 8   20    [10,6,3,8,15,20] 

//   //traverses vertically from top to botto, left to right. first value returned is always the root
//   //look at left side first, once that's done go to the right

//   DFSpreOrder() {
// let visited=[]
// let current=this.root

// function traverse(node){
//   visited.push(node.value)
//   if(node.left) traverse(node.left)
//   if(node.right) traverse(node.right)
// }
// traverse(current)

// return visited
//   }

//   //DFS-PostOrder
//  //   10
//   //   / \
//   //  6  15
//   // / \  \
//   // 3 8   20    [3,8,6,20,15,10]  

//   //visit the entire branch then the node. 
//   //traverses horizontally from bottom to top, left to right. root is last thing returned

// DFSpostOrder(){

//   let visited=[]
//   let current=this.root

//   function traverse(node){
// if(node.left) traverse(node.left)
// if(node.right) traverse(node.right)

//     visited.push(node.value)
//   }
// traverse(current)
//   return visited
// }

// DFSinOrder(){    //[3,6,8,10,15,20]
//   let visited=[]
//   let current=this.root

//   function traverse(node){
//     if(node.left) traverse(node.left)
//     visited.push(node.value)
//     if(node.right) traverse(node.right)
    
      
//   }
//   traverse(current)

//   return visited
// }

traverseBFS(){
  if(!this.root)return 
 this.queue=[]
  queue.push(this.root)
  this.output=[]

  while(queue.length){
    const node= this.queue.unshift()
    if(node.left){
      this.queue.push(node.left)
    }
    if(node.right){
      this.queue.push(node.right)
    }
    this.output.push(node.val)
  }
  return this.output
}

getMin(){
  let node =this.root
  while(node.left){
    node=node.left
  }
  return node.val
}

getMax(){
  let node= this.root
  while(node.right){
    node=node.right
  }
  return node.val
}

traverseDFS(){
  if(!this.root)return 

  this.output=[]

  function traverse(node){
    if(node.left) traverse(node.left)
  output.push(node.val)
  if(node.right) traverse(node.right)

traverse(root)
return output
  }

}


// DFSinOrder(){    //[3,6,8,10,15,20]
//   let visited=[]
//   let current=this.root

//   function traverse(node){
//     if(node.left) traverse(node.left)
//     visited.push(node.value)
//     if(node.right) traverse(node.right)
    
      
//   }
//   traverse(current)

//   return visited





FEM notes
stirngs   they are imutable. You just create anothe string
.split() //makes array
.toLowerCase()
.substring() // get part of a string
.startsWith


1. reverse a stirng
function reverseS(str){
//   let strA = str.split("")
//   let reversed=[]

//   for(let i=str.length-1; i>=0; i--){
//         reversed.push(str[i])
//   }
// return reversed.join("")
str.split('').reverse().join('')
}

reverseS('catanddog')

arrays  
Object.enteries() // will convert object to array
Array.from() //make something like an array
[...item]
.isArray()
.concat()

which returns a new array
.filter()
.concat()
.map()

.reduce // returns anything you want array or number

2.  create a function that takes string and removes duplicates and returns a stirng
function dup(str){
let arr=str.split(' ')
let set= new Set(arr)

// for(let a of arr){
// set.add(a)
// }
let arrFromSet=Array.from(set) // const newstring= [...set].join(' )
return arrFromSet.join(' ')


}
dup('The only only kid kid in town in')

3. flatten array
function flatten(arr){
  let flat=[]
  for (let i=0; i<arr.length; i++){
    const current= arr[i]
    if(!Array.isArray(current)){
      flat.push(current)
    }else{
    flat=  flat.concat((flatten(current)))
    }
  }
  return flat
}

flatten([1,2,[2,3,[3],5],[7,[8]]])
  
  arr.isArray()

function flatten(arr){
const newArr = arr.reduce((acc,curr)=>{
if(Array.isArray(curr)){
  acc= acc.concat(flatten(curr))

}else{
  acc.push(curr)
 
}
return acc

},[])
return newArr
  }

flatten([1,2,[2,3,[3],5],[7,[8]]])

4. scope. the context you are opperating in. what is a valable to you
3 main ways we change scope
.call() // takes elements
.apply() // takes array
.bind()  // partial application??

implement Function.prototype.bind()
const foo = function(){
  console.log(this.bar)

  let baz= foo.bind({bar:'hello'})

  baz() //hello
}
function bind(fn, context){
 return function(){
   fn.call(context)
 }
}

5. timing
setInterval(): how do we schedule things in js, things will happen on a loop until we stop it 
setTimeout(): wait seconds passed in and then execute



6. implement debounce
debounce- way of slowing something down, autocomplete search only ot fire when you stop typing not every char,  vs throtle?

setTimeout returns an id, use it to keep track if you have fired something, if you call debounce() 5x want to clear previous calls
and then execute last one
function debounce(timeout, fn){
let setTimeoutId;
  return function(){
    if(setTimeoutId){
      clearTimeout(setTimeoutId)
    }
   setTimeoutId= setTimeout(()=>{
      fn.apply(this, arguments)
      setTimeoutId =null;

    }, timout)
  }

}

throttle, execute first item and wait until it's done executing before firing again

function throttle(fn, timeout){
  let setTimeoutId;
  return function(){
    if(setTimeoutId){
     return
    }
   setTimeoutId= setTimeout(()=>{
      fn.apply(this, arguments)
      setTimeoutId =null;

    }, timout)
  }
}
7. trees 
all trees have a parent and child nodes
DOM 
we have 2 identical DOM trees, A and B. we have the location of an element. create a function to find that same element in tree B

function reversePath(element, root){
//want to walk from the element up the trree to the root, store the path and then can use it to walk down tree b
const path = []

}
