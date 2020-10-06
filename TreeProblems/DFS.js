//uses recursion

//DFS- PreOrder

  //   10
  //   / \
  //  6  15
  // / \  \
  // 3 8   20    [10,6,3,8,15,20] 

  //traverses vertically from top to botto, left to right. first value returned is always the root
  //look at left side first, once that's done go to the right

  DFSpreOrder() {
let visited=[]
let current=this.root

function traverse(node){
  visited.push(node.value)
  if(node.left) traverse(node.left)
  if(node.right) traverse(node.right)
}
traverse(current)

return visited
  }

  //DFS-PostOrder
 //   10
  //   / \
  //  6  15
  // / \  \
  // 3 8   20    [3,8,6,20,15,10]  

  //visit the entire branch then the node. 
  //traverses horizontally from bottom to top, left to right. root is last thing returned

DFSpostOrder(){

  let visited=[]
  let current=this.root

  function traverse(node){
if(node.left) traverse(node.left)
if(node.right) traverse(node.right)

    visited.push(node.value)
  }

  return visited
}








  //write a hekper method for each orther, use a switch statement to stipulate the order we want to use





  
  
