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
  if(str.length <=160){
return resultArr.push(str)
  }
let x=null //number of lines in resultArr


let count=0 //tracks char count per line
let tempText=[]
let wordsArr=str.split(' ')
console.log(wordsArr)
for(let i=0; i<wordsArr.length; i++){
  let currentW= wordsArr[i]
  if((count + currentW.length) <= 154){ //leave 6 char for " (1/x)"
    count+=currentW.length
    tempText.push(currentW)
  
  }else if((count + currentW.length) >154|| i=== wordsArr.length-1){ //more than 154 char or end of the arr
    let correctCharSent= tempText.join(" ")
   
    resultArr.push(correctCharSent)
    tempText=[]
    count=0
  }

}
console.log('resultArr',resultArr)


}
sms("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")