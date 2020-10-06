10
/ \
6  15
/ \  \
3 8   20    [10,6,15,3,8,20]


BFS(){
let visited = [] //visited nodes, return at the end
let queue = []  // first in first out
let node=this.root
queue.push(node) // place root in queue
//as long as there is anything in the queue keep looping

while(queue.length){
 node = queue.shift()  //remove first item from queue
 visited.push(node)
 if(node.left) queue.push(node.left)
 if(node.right) queue.push(node.right)


}
return visited

}

