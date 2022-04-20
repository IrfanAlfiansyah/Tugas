const reverseWord = (text) => {
  let word = ""
  let hasil = ""
  for (let i = 0; i <= text.length-1; i = i+1){
    if (text[i] !== " "){
      word = word + text[i]
    }
    if (text[i] === " "){
      hasil = " " + word + hasil
      word = ""
    }
  }
  hasil = word + hasil
  return hasil
}
console.log(reverseWord("Saya Belajar Javascript"))