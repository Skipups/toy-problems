//min priority queue lower priority value is a higher priority 
//and should be at the bottom of queue since it's a min priority queue
//o(log n) for insertion and deletion time. o(n) search time

class Node{
  constructor(val, priority){
    this.val=val,
    this.priority=priority
  }
}

class PriorityQueue{
  constructor(){
    this.queue=[]
  }
  enqueue(val,priority){
    let newNode= new Node(val, priority)
    this.queue.push(newNode)
    this.bubbleUp()
  console.log(this.queue)
  }
  bubbleUp(){
 let elemIdx= this.queue.length-1
 let elem= this.queue[elemIdx]

 while(elemIdx>0){
  let parentIdx= Math.floor((elemIdx-1)/2)
  let parent= this.queue[parentIdx]
  if(parent.priority<=elem.priority){
    break
  }else{
    this.queue[parentIdx]=elem
    this.queue[elemIdx]=parent
    elemIdx=parentIdx
  }
  }
 }

  
dequeue(){
  let min= this.queue[0]
  let end= this.queue.pop()
  if(this.queue.length >0){
    this.queue[0]=end
    this.sinkDown()
  }
  console.log('min', min)
  return min

}
sinkDown(){
  let elem= this.queue[0]
  let idx=0
  const length= this.queue.length
  let leftChild
  let rightChild

  while(true){
    let leftChildIdx=2*idx+1
    let rightChildIdx=2*idx+2
    let swap=null

    if(leftChildIdx<length){
         leftChild= this.queue[leftChildIdx]
        if(leftChild.priority< elem.priority){
          swap=leftChildIdx

        }
    }
    if(rightChildIdx<length){
rightChild= this.queue[rightChildIdx]
      if(
        (swap === null &&rightChild.priority< elem.priority) ||
        (swap !==null && rightChild.priority<leftChild.priority)
      ){
        swap=rightChildIdx
      }

    }

    if(swap === null){
      break
    }
    this.queue[idx]=  this.queue[swap]
    this.queue[swap]=elem
    idx=swap
  }
}


}

const priorityHeap = new PriorityQueue()
priorityHeap.enqueue("buy milk", 5)
priorityHeap.enqueue("buy coat", 1)
priorityHeap.enqueue("buy cat", 4)
priorityHeap.enqueue("buy tea", 2)
priorityHeap.enqueue("buy socks", 3)

 priorityHeap.dequeue()
 console.log(priorityHeap)
 priorityHeap.dequeue()
 priorityHeap.dequeue()
 priorityHeap.dequeue()
 priorityHeap.dequeue()
// priorityHeap.dequeue()
// priorityHeap.dequeue()
// priorityHeap.dequeue()

