// ---- TIPE DATA PRIMITIF / HANYA MENAMPUNG 1 NILAI

const name = 'Hikigaya'; // STRING : TEXT
const age = 30; // STRING : TEXT
const salary = 10_000_000.0; // INTEGER : NUMBER
const isTrue = false; // BOOLEAN : true or false
const kosong = null; // NULL : KOSONG
let kosongDua; // UNDEFINED : TIDAK DIDEFINISIKAN

/*
 * Variabel yang didefinikan dengan kata kunci const nilainya tidak bisa diubah, akan menghasilkan error jika dipaksa.
 */

console.log('---------------------');
console.log(typeof name);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof isTrue);
console.log(typeof kosong);
console.log(typeof kosongDua);
console.log(typeof kosongTiga);

console.log('NAMA : ', name);
console.log('USIA : ', age);

// ---- TIPE DATA NONPRIMITIF
// OBJECT
const karyawan = {
  nama: 'Rifa Sella',
  usia: 24,
  job: 'WengDev',
};
console.log('Contoh tipe data Object Javascript : ', karyawan);
console.table(karyawan);

// ARRAY
const daftarKaryawan = ['Yui', 30, 'Gahama', 31];
console.log('Contoh tipe data Array Javascript : ', daftarKaryawan);

const listKaryawan = [
  {
    nama: 'Muhammad Maruf',
    job: 'Unemployed',
  },
  {
    nama: 'Sri Pujiartini',
    job: 'Admin',
  },
  {
    nama: 'Yukinoshita',
    job: 'CEO',
  },
];

console.log(listKaryawan);
console.table(listKaryawan);
console.table(listKaryawan.map(kary => {
  return {nama: kary.nama}
}));

