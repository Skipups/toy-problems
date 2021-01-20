class Node{
  constructor(value){
this.val=value;
this.left=left;
this.right=right
  }
}

class BST{
  constructor(){
    this.root=null
  }
 addNode(val){
    let node=new Node(val)
    if(this.root === null){
      this.room=node
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode){
    if(newNode.val<node.val){
        if(!node.left){
          node.left=newNode
        }else{
          this.insertNode(node.left, newNode)
        }
    }else{
      if(!node.right){
        node.right=newNode
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }
  remove(val){
this.root=this.removeNode(this.root, val)
  }
  removeNode(node, val){
    if(!node){
      return null
    }

      if(node.val >val){
       node.left=this.removeNode(node.left,val)
       return node
      }else if(node.val<val){
        node.right=this.removeNode(node.right,val)
      }else{
        if(!node.right && !node.left){
          node=null
          return node
        }
      }
    
  }
  //traverse tree
  inOrder(node){
    if(node){
      this.inOrder(node.left)
      console.log(node.val);
      this.inOrder(node.right)
    }
  }
  preOrder(node){ //roots first
    if(node){
      console.log(node.val)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  postOrder(node) {
    if (node) {
       this.postOrder(node.left);
       this.postOrder(node.right);
       console.log(node.val);
    }
 }
 

}

const tree = new BST()
tree.root = new Node(10)