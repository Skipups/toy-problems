dot vs bracket notation
bracket- access properties on an object by specifying the object and the property name in quotes let sound = obj['cat'];
Property identifiers have to be a String or a variable that references a String.
  if there are no quotes then you are passing a varialbe whatever the variable evaluates to 
  let dog = 'cat';
  let sound = obj[dog];  ==> obj['cat']
dot- access properites on an object by specifying the object and then the property name let sound = obj.cat;
arr.push() array method because () we are calling it
arr.length property because no paretheses

create object usig bracket and dot notation that reprents the charecters and related data you can find in clearTimeout

const game={
characters: ['white','mustard','scarlet'],
}
game.weapons=["revolver","candle stick"]

game['rooms']=['ballroom',"parlor"]

-----
obj descructuring, obj aren't in order so variable nam has to match the property name
let {first1}= {first1:0} first1 ==> 0

practice. descructure {'name': "Rusty", "room":"kitchen", "weapon": "candlestick"} 

const {name, room, weapon}= {'name': "Rusty", "room":"kitchen", "weapon": "candlestick"} 

//omit values
const [a, ,b]=[1,2,3]
console.log(a,b)==> 1,3

//combine with spread/rest operator, accumulates the rest of the values
const [a, ...b]= [1,2,3,4]
console.log(a,b)==> 1, [2,3,4]

//swap variables easily without temp
var a=1, b=2
[b,a]=[a,b]
console.log(a,b)==>2,1