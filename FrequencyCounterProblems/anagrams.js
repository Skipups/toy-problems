//given 2 strings determine if the one is an anagram of the other


function anagram(str1,str2){

  if (str1.length != str2.length) return false

  let obj1={}
  let obj2={}

  for(let i=0; i<str1.length; i++){
    let letter=str1[i]
    obj1[letter]=(obj1[letter] || 0) +1
  }

  for(let i=0; i<str2.length; i++){
    let letter=str2[i]
    obj2[letter]=(obj2[letter] || 0) +1
  }

  for(let key in obj1){
    if(!(key in obj2)){
      return false
    }
    if(obj1[key] !==obj2[key]){
      return false
    }
  }



return true

}

anagram('race', 'acre')