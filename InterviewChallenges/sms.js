// Given an input string of arbitrary length, output SMS-compliant segmnets with suffixes.
// Segment is of length 160 char or less.
// Don't generate seqments if the input fits in a single message
// A segment suffix looks like (1/5) for the first of five segmnets, it will have at most 9 segments
// The segment content and suffix must both fit in the segment
// Return an array of message segments

//message = 'As a reminder, you have an appointment with Dr. Smith tomorrow at 3:30 pm. If you are unable to make this appointment, please call our customer service line at least 1 hour before your scheduled appointment time.'
 //output ["As a reminder, you have an appointment with Dr. Smith tomorrow at 3:30 pm. If you are unable to make this appointment, please call our customer service (1/2)", "and line at least 1 hour before your scheduled appointment time.(2/2)"]

function sms(str){
let resultArr=[]
let totalLines= Math.ceil(str.length/155)
let currentLine=1
  if(str.length <=160){
return resultArr.push(str)
  }


let tempText=""
let count=tempText.length//tracks char count per line

let wordsArr=str.split(' ')
console.log('wordsArr.length',wordsArr.length)
for(let i=0; i<wordsArr.length; i++){
  let currentW= wordsArr[i]
  if((count + currentW.length) <= 155){ 
    tempText +=currentW + ' '
    count =tempText.length
  
  }if((i=== wordsArr.length-1) || (count + currentW.length) >155){ //more than 155 char or end of the arr
    console.log('i inside',i)
    tempText+=`${ currentLine}/${totalLines}`
   currentLine+=1
    resultArr.push(tempText)
    tempText=''
    count=0
  }

}
console.log(resultArr)
return resultArr


}
sms("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

// ["asdfsfsadf (1/2"," asdfsfsadf (2/2)"]



