const cekPalindrom = (string) => {
  const len = string.length                                                          //menghitung panjang string
  for (let i = 0; i < len / 2; i = i + 1) {                                          //looping string hingga setengah dari panjang string
    if (string[i].toLowerCase() !== string[len - 1 -i].toLowerCase()) {               //mengecek hasil looping dengan kondisi pengecekan perhuruf 
      return `${string} Bukan Palindrom`                                             //mereturn hasil looping
    }
  }
  return `${string} Merupakan Palindrom`
};

console.log(cekPalindrom("Malam"));
console.log(cekPalindrom("baju"));
