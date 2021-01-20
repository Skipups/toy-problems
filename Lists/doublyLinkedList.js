class Node(){
  construstor(val){
    this.val=val
    this.next=null
    this.prev=null
  }
}
class DLL(){
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }
  push(val){
   let node= new Node(val)
   if(this.size ==0){
     
this.head=node
this.tail=node
   }else{
     this.tail.next=node
     node.prev= this.tail
     this.tail=node
   }
   this.size++
    
  }
  PopStateEvent()
}