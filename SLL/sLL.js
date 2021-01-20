class Node{
  constructor(val){
    this.val=val
    this.next=null
  }
}

class SLL{
  constructor(){
    this.head=null
    this.tail=null
    this.length=0
  }
  push(val){
    let nNode=new Node(val)
    if(this.length===0){
      this.head=this.node
      this.tail=this.node
      
    }else{
   
      this.tail.next=nNode
      this.tail=nNode
    }
    this.length++
      return this
x
  }
  pop(){

  }
  shift(){

  }
  unshift(){

  }
  get(){

  }
  set(){

  }
  insert(){

  }
  remove(){

  }
  reverse(){

  }
}