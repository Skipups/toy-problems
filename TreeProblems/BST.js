class Node{
  constructor(val){
    this.value=val
    this.left=null
    this.right=null
  }
}                
//       10
//    5      13
// 2    7   11  16

class BinarySearchTree{
  constructor(){
    this.root=null
  }
  insert(val){
    let newNode= new Node(val)
    if(this.root === null){
      this.root=newNode
      return this
    }else{
      let current=this.root
      while(true){
        if(val === current.value) return undefined
        if(val<current.value){      //go left
          
          if(current.left === null){ // found insert spot
              current.left = newNode
              return this
          } else{                    //update  what current is
              current=current.left
          }
        }else{                       //go right
        if(current.right === null){  //found insert spot
          current.right=newNode
          
          return this
        }else{
          current=current.right
        }
      }

      }
    }
}
find(val){
  if(this.root === null) return false
  let current= this.root
  let found = false
  while(current && !found){

  
  if(val<current.value){  // go left
   
     current= current.left
  } else if(val> current.value){  //go right
    current= current.right
  } else{
    found = true
  }
}
if(!found) return undefined
return current
}
}
let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(2)
console.log(tree)
tree.find(2)
tree.find(9)
