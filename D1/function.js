function penjumlahan(a, b) {
  const jumlah = a + b;
  return jumlah;
}

console.log(penjumlahan(1, 3));

function cekBilanganPositif(angka) {
  if (angka < 0) {
    return 'Negatif';
  } else if (angka > 0) {
    return 'Positif';
  } else if (angka == 0) {
    return 'Adalah Nol';
  }
  return 'Aja sendiri!';
}

console.log(cekBilanganPositif(0));
console.log(cekBilanganPositif(-1));
console.log(cekBilanganPositif(1));
console.log(cekBilanganPositif('angka'));

const kaliDua = (a) => {
  return a * 2;
};

console.log(kaliDua(5));
