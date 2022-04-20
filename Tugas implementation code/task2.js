const reverseWord = (text) => {
  let wordSplit = text.split(" "); //memisahkan kata demi kata pada text
  console.log("Hasil pemisahan kata = " + wordSplit);

  // membalik kata demi kata
  hasilReverse = "";
  for (let i = wordSplit.length; i > 0; i--) {
    hasilReverse += " " + wordSplit[i - 1];
  }
  console.log(`${hasilReverse}`);
}
reverseWord("Saya Belajar Javascript");