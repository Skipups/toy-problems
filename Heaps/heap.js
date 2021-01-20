class Node{
  constructor(val,priority){
    this.val=val,
    this.priority=priority
  }
}

class MinBH{
  constructor(){
    this.values=[]
  }

  insert(val,priority){
    let node= new Node(val,priority)
    this.values.push(node)
    this.bubbleUp()
  }
  bubbleUp(){
    let elemIndex=this.values.length-1
    let elem=this.values[elemIndex]

    while(elemIndex>0){
      let parentIndex= Math.floor((n-1)/2)
      let parent=this.values[parentIndex]

      if(elem.priority <parent.priority){
        this.values[parentIndex]=elem
        this.values[elemIndex]=parent
        elemIndex=parent
      }else{
        break
      }
    }
  }
  deleteMax(){
    let min= this.values[0]
    let last=this.values.pop()
    if(this.values.length >0){
      this.values[0]=last
      this.sinkDown()
    }
    return min
  }
sinkDown(){
  let idx=0
  let elem=this.values[0]
  let n= this.values.length
  let swap=null

  while(idx<n){
let leftI=2*idx+1
let rightI=2*idx+2
let lchild
let rchild

if(leftI<n){
 lchild=this.values[leftI]
  if(lchild.priority< elem.priority){
    swap=leftI
  }

}
if(rightI<n){
rchild= this.values[rightI]
if(
  (swap===null &&rchild.priority<elem.priority) ||
  ( swap !==null && rchild.priority<lchild.priority)
  )
  swap=rightI
}
if(swap===null){
  break
}
this.values[idx]=this.values[swap]
this.values[swap]=elem
idx=swap



  

}



