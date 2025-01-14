// -- Math.Object : Metode2 untuk operasi matematika

// -- random : generate angka random dengan range 0-1
let angkaAcak = Math.random();
console.log('Math random : ', angkaAcak);
console.log('Math random 1 - 10 : ', Math.round(Math.random() * 10));

// -- Math.floor : Membulatkan angka kebawah
console.log('Math floor : ', Math.floor(3.14));

// -- Math.ceil : Membulatkan angka keatas
console.log('Math ceil : ', Math.ceil(3.14));

// -- Math.round : Membulatkan angka terdekat
console.log('Math round : ', Math.round(3.14));

// -- Math.max : Mencari angka tertinggi
console.log('Math max : ', Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 100));

// -- Math.min : Mencari angka terkecil
console.log('Math min : ', Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 100));

// -- Math.sqrt : Mengitung akar kuadrat
console.log('Math sqrt : ', Math.sqrt(25));

// -- Math.pow : Menghitung pangkat
console.log('Math pow : ', Math.pow(5, 2));

// -- Math.PI : Menghasilkan angka Pi
console.log('Pi :', Math.PI);

// -- Contoh hitung lingkaran
console.log(
  'Luas lingkaran dengan r = 5 satuan: ',
  Math.floor(Math.PI * Math.pow(5, 2))
);
