// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes)
// and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

function inFligt(flightMinutes, moviesArr){
console.log('cat')
  let watchedMovies=new Set()
  let remainingTime

for (let i=0; i< moviesArr.length; i++){
  let watched= moviesArr[i]
 remainingTime= flightMinutes- watched
 if(watchedMovies.has(remainingTime)) return true
 watchedMovies.add(watched)

}
return false
}

inFligt(123, [100,50,23,73])
