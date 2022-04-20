const reverseWord = (text) => {
  if (typeof text !== "string"){
    return "Text harus berupa string"
  }
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
  hasil = word + "" + hasil
  return hasil
}
const output = reverseWord("Saya Belajar Javascript")
console.log(output)