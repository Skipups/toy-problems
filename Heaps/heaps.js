class MaxBinaryHeap{
  constructor(){
    this.values=[]
  }
  insert(elem){
    this.values.push(elem)
   this.bubbleUp()
   
  }
  bubbleUp(){
let idx= this.values.length-1
const elem= this.values[idx]
while(idx>0){
  let parentIdx= Math.floor((idx-1)/2)
  let parent= this.values[parentIdx]
  if(parent >= elem){
    break
  }else{
    this.values[parentIdx]= elem
    this.values[idx]=parent
    idx=parentIdx
  }
}
  }
  extractMax(){
  let oldRoot =this.values[0]
   let last= this.values.pop()
   if(this.values.length >0){
    this.values[0]=last
    this.sinkDown()
   }
   return oldRoot
   
  }
  sinkDown(){
    let idx=0
    const elem= this.values[0]
    const length= this.values.length

    while(true){
      let leftChildIdx=2*idx +1
      let rightChildIdx=2*idx +2
      let leftChild
      let rightChild
      let swap=null
if(leftChildIdx <length){
  leftChild=this.values[leftChildIdx]
  if(leftChild>elem){
    swap= leftChildIdx
  }
}
if(rightChildIdx<length){
   rightChild= this.values[rightChildIdx]
   if(
     (swap === null && rightChild > elem) || 
    (swap !==null && rightChild> leftChild)
    ){
      swap= rightChildIdx
   }
}
      if(swap === null){
        break
      }
      this.values[idx]=this.values[swap]
      this.values[swap]=elem
      idx=swap

    }
    console.log(this.values)

  }


}

let heap= new MaxBinaryHeap()
console.log(heap.values)
heap.extractMax()

