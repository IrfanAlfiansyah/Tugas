const arkFood = (harga, voucher, jarak, pajak) => {
  let potonganHarga = 0;
  let ongkir = 0;
  let subTotal = 0;
  let tax = 0;

  //menghitung harga nilai promo
  if (voucher === "ARKAFOOD5") {
    if (harga >= 50000) {
      potonganHarga = harga * 0.5; {
        if (potonganHarga > 50000) {
          potonganHarga = 50000;
        }
      }
    }
    else {
      console.log("\nHarus minimal belanja 50000 untuk dapat menggunakan voucher")
    }
  }
  if (voucher === "DITRAKTIRDEMY") {
    if (harga >= 25000) {
      potonganHarga = harga * 0.6; {
        if (potonganHarga > 30000) {
          potonganHarga = 30000;
        }
      }
    }
    else {
      console.log("\nHarus minimal belanja 25000 untuk dapat menggunakan voucher")
    }
  }
  //menghitung jarak ongkir
  if (jarak <= 2) {
    ongkir = 5000;
  }
  if (jarak > 2) {
    ongkir = 5000 + (jarak - 2) * 3000;
  }

  //menghitung pajak
  if (pajak === true) {
    tax = harga * 0.05;
  }

  subTotal = harga - potonganHarga + ongkir + tax;

  console.log(`\nHarga = Rp ${harga}`);
  console.log(`Potongan Harga = Rp ${potonganHarga}`);
  console.log(`Biaya Antar = Rp ${ongkir}`);
  console.log(`Pajak = Rp ${tax}`);
  console.log(`Jumlah Total = Rp ${subTotal}`);
};
arkFood(45000, "ARKAFOOD5", 5, true)
arkFood(75000, "ARKAFOOD5", 5, false)
arkFood(10000, "DITRAKTIRDEMY", 5, true)
arkFood(50000, "DITRAKTIRDEMY", 5, false)