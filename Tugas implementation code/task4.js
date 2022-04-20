const divideAndSort = (num) => {
  if (typeof num !== "number"){
    return"Data harus berupa number"
  }
  let angka = num.toString().split(0);                             //merubah tipe data num menjadi string dan mengganti string 0 dengan tanda koma
  let newNum = "";                                                 //deklarasi string kosong sebagai penampung hasil looping
  
  for (let i = 0; i < angka.length; i = i + 1) {
    newNum = newNum + angka[i].split("").sort().join("");      //menggabungkan hasil looping dengan method split, sort dan join
  }
  return newNum
}
console.log(divideAndSort(5956560159466056));
console.log(divideAndSort("9523746398000776"))

