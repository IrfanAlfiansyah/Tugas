const cekPalindrom = (string) => {
  const len = string.toLowerCase();                     //mengubah string menjadi lowercase dengan method toLowerCase
  for (let i = 0; i < len / 2; i = i + 1) {             //looping string hingga setengah dari panjang string
    if (string[i] !== string[len - 1 - i]) {            //mengecek hasil looping dengan kondisi pengecekan perhuruf 
      return `${string} Bukan Palindrom`                //mereturn hasil looping
    }
  }
  return `${string} Merupakan Palindrom`
};

console.log(cekPalindrom("Malam ini ini Malam"));
console.log(cekPalindrom("matahari"));
