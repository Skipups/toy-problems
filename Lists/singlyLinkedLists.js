
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
  //add value to list
  push(val){
    let newNode= new Node(val)
    if(!this.head){
      this.head= newNode
      this.tail=newNode
    
    }else{
      this.tail.next=newNode
   this.tail=newNode
    }

    this.length++
    return this
  }
  //keep track of current and new tail
  pop(){
    if(!this.length) return undefined
    let current = this.head
    let newTail=current
    while(current.next){
      newTail=current
      current=current.next
    }
  
   this.tail=newTail
   this.tail.next=null
   this.length--
   if(this.length ===0){
     this.head=null
     this.tail=null
   }
   return current

  }
  shift(){
    if(!this.head) return undefined
   let prevHead= this.head
   this.head= prevHead.next
   prevHead.next= null
   this.length--
   if(!this.length){
     this.head=null
     this.tail=null
   }
   return prevHead
  }
  unshift(val){
    let newNode= new Node(val)
    if(!this.head){
    this.head= newNode
    this.tail=newNode
    }else{
      newNode.next=this.head
      this.head=newNode
      
    }
    this.length++
   
    return this
  }
  get(indx){
   if(indx <0 || indx >= this.length) return null
  //  if(indx===0) return this.head.value
  //  if(indx===this.length-1) return this.tail.value
     let currentIndx=0
     let currentNode=this.head
     while(currentIndx !==indx){
       currentNode=currentNode.next
       currentIndx++
     }
     return currentNode

  }
  set(val,indx){
let nodeToUpdate =this.get(indx)
console.log('nodeToUpdate', nodeToUpdate)
if(nodeToUpdate){
  nodeToUpdate.val=val
  return true
}else{
  return false
}

  }
  insert(val,indx){
    let newNode= new Node(val)
if(indx < 0 || indx >= this.length) return false
if(indx===0){
  this.unshift(val)
  return true
}
else if (indx === this.length){
  this.push(val)
  return true
} else{
  let whereToInsert= this.get(indx)
    let indxBeforeWhereToInsert = this.get(indx-1)
    indxBeforeWhereToInsert.next=newNode
    newNode.next=whereToInsert
    this.length++
    return true

}
   

  }
  remove(indx){
if(indx < 0 || indx >= this.length){
  return false
} 
if (indx ===0){
  this.shift(indx)
  return true
}
if (indx === this.length-1){
  this.pop()
  return true
}
let nodeForRemoval = this.get(indx)
let nodeBeforeForRemoval = this.get(indx-1)
nodeBeforeForRemoval.next = nodeForRemoval.next
this.length --
return true
  }
  reverse(){
let current= this.head
this.head=this.tail
let next
let prev=null

for (let i=0; i<=this.length; i++){
  next=current.next
 current.next=prev
 prev= current
 current =next
}
return this
  }
}

let myList=new SLL()
myList.push(5)
myList.push(10)
myList.push(12)
console.log(myList)




