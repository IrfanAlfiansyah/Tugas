const divideAndSort = (num) => {
  if (typeof num !== "number"){
    return"Data harus berupa number"
  }
  let angka = num.toString();                             //merubah tipe data num menjadi string
  let splitNum = angka.split(0);                          //menghilangkan angka 0 dan menggantinya menjadi tanda koma
  let newNum = "";                                        //deklarasi string kosong sebagai penampung hasil looping
  
  for (let i = 0; i < splitNum.length; i = i + 1) {
    newNum = newNum + splitNum[i].split("").sort().join("");      //menggabungkan hasil looping dengan method split, sort dan join
  }
  return `${newNum}`
}
console.log(divideAndSort(5956560159466056));
console.log(divideAndSort("9523746398000776"))