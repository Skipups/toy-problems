
// given a certain amount of floors and eggs, what is the least number of drops to ensure a 
// pivotal floor is found

// pivotal being the highest floor from which the egg doesn't break
//https://www.youtube.com/watch?v=iOaRjDT0vjc&list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI&index=2&t=65s

// base case #1
// 1 egg, x floors

// what is the worst amount of drops for the gaurentee
// if 1 egg and x floors, start from the first floor and work up, upperbound is the number of floors

// base case #2
// x eggs, 1 floor

// what is the worst amount of drops for the gaurentee
// if 1 floor, upperbound is 1

// base case #3
// x eggs, 0 floor

// what is the worst amount of drops for the gaurentee
// if 0 floor, upperbound is zero

//subproblems
  //each floor as 2 ways it can go break or not break
  // if break move down a floor
    //if on lowest floor: totalFloor-currentFloor ==== 0 || === 1, this is a basecaase
  // no break move up a floor
    //if on top floor: totalFloors-currentFloor ===0, this is a basecase
    //save how many floors you have to work with
      //-if it doesn't break on floor 5, of 6 total, (3,1)=> 3ggs and 1 floor left to explore(6th floor)
function eggDroppping(totalEggs, totalFloors){
if(totalEggs===1){
  return totalFloors
}
if(totalFloors === 0 || totalFloors ===1){
  return totalFloors
}

}


