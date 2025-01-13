//SOAL 1

let [a, b, c] = [10, 5, 2];

tambah = a + b + c;
kurang = a - b - c;
kali = a * b * c;
bagi = a / b / c;
modul = a % c;
modulb = (a % b) % c;
jmlkb = a + (b * c) / c;
jmlall = tambah + kurang + kali + bagi + modul + jmlkb;
console.log('=============================');
console.log('============MARUF============');
console.log('=============================');

console.log('\n===========SOAL 1============\n');

console.log('X = ', a);
console.log('Y = ', b);
console.log('Z = ', c);
console.log('Penjumlahan : ', tambah); //X + Y + Z
console.log('Pengurangan : ', kurang); // X - Y - Z
console.log('Perkalian : ', kali); // X * Y * Z
console.log('Pembagian : ', bagi); // (X / Y )/ Z
// console.log('Modulus : ', modul); // X % Z
console.log('Modulus : ', modulb); // X % Y % Z
console.log('Jumlah-kali-bagi : ', jmlkb);
console.log('Total : ', jmlall);

console.log('\n===========SOAL 2============\n');

//SOAL 2 : Hitung berapa detik dalam 30 hari menggunakan operator matematika

hari = 30;
jam = 24;
menit = 60;
detik = 60;
totalDetik = hari * jam * menit * detik;
console.log(`Total detik dalam 30 Hari \n adalah ${totalDetik} detik`);

console.log('\n===========SOAL 3============\n');
//SOAL 3 : Cari hobby didalam data yang dikirim dari parameter user, jika object user atau properti hobby tidak ditemukan makan return Hobby Tidak Ada

function findUserHoby(user) {
  const nama = user.nama;
  const hobby = user.hobby || 'Hoby tidak ada';
  return `${nama} : ${hobby}`;
}

let user1 = {
  nama: 'owi kun',
  age: 25,
  hobby: ['Membaca', 'Menulis'],
};
let user2 = {
  nama: 'mega chan',
  age: 25,
};

console.log(findUserHoby(user1));
console.log(findUserHoby(user2));

console.log('\n===========SOAL 4============\n');
// ---- LOGIC
/** SOAL 4 : Buat logic switch case untuk menampilkan nama hari pake bahasa inggris berdasarkan input angka 1 - 7,
 * jika angka yang dimasukan diluar rentang tersebut, maka tampilkan "Input tidak valid"
 */
let input = 7;
switch (input) {
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log('Sabtu');
    break;
  case 7:
    console.log('Minggu');
    break;

  default:
    console.log('Input tidak valid');
    break;
}

console.log('\n===========SOAL 5============\n');
/** SOAL 5 : Buat logiv if yang menentukan status kelulusan orang berdasarkan nilai yang didapat.
 * jika nilai lebih dari atau sama dengan 80, maka statusnya adalah "Anda lulus dengan sangat baik",
 * jika nilai lebih dari atau sama dengan 70 dan kurang dari 80, maka statusnya adalah "Anda lulus dengan baik",
 * jika nilai lebih dari atau sama dengan 60, dan kurang dari 70, maka statusnya adalah "Lulus",
 * jika nilai kurang dari 60, maka statusnya "Tidak lulus".
 */
let nilai = 78;

if (nilai >= 80) {
  console.log('Anda lulus dengan sangat baik');
} else if (nilai >= 70 && nilai < 80) {
  console.log('Anda lulus dengan baik');
} else if (nilai >= 60 && nilai < 70) {
  console.log('Lulus');
} else {
  console.log('Anda tidak lulus');
}

console.log('\n===========SOAL 6============\n');
/**
 * SOAL 6 : Nested if
 * buat logic untuk nentuin nilai rata-rata siswa dengan menghitung nilai rata-rata dari 3 mapel (MTK ,Fisika, Kimia)
 * jika nilai yang dimasukan tidak valid (diluar rentang 0-100), maka statusnya "nilai tidak valid"
 * jika nilai rata-rata lebih besar atau sama dengan 80, maka statusnya "Selamat anda lulus dengan baik"
 * jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan 60, maka statusnya "Anda lulus"
 * jika nilai rata-rata lebih kecil dari 60 maka statusnya "anda tidak lulus"
 *
 */
let nilaiMtk = 70;
let nilaiKimia = 70;
let nilaiFisika = 70;
let valid = true;

function isNilaiValid(mtk, kimia, fisika) {
  if (mtk < 0 || mtk > 100) return false;
  if (kimia < 0 || kimia > 100) return false;
  if (fisika < 0 || fisika > 100) return false;
  return true;
}

if (isNilaiValid(nilaiMtk, nilaiKimia, nilaiFisika)) {
  let rataRata = (nilaiMtk + nilaiKimia + nilaiFisika) / 3;
  if (rataRata >= 80) {
    console.log('Selamat anda lulus dengan sangat baik');
  } else if (rataRata >= 60) {
    console.log('Anda lulus');
  } else {
    console.log('Anda tidak lulus');
  }
} else {
  ('Nilai tidak valid');
}

console.log('\n===========SOAL 7============\n');

let inputAngka = 0;
console.log(
  inputAngka == 0
    ? `Angka ${inputAngka} adalah Nol`
    : inputAngka > 0
    ? `Angka ${inputAngka} adalah bilangan positif`
    : `Angka ${inputAngka} adalah bilangan negatif`
);

console.log('\n===========SOAL 8============\n');

const namabarang = 'Sabun';
const jumlahBarang = 2;
const hargaBarang = 2_000;
const totalPembelian = jumlahBarang * hargaBarang;
let diskon, hargaSetelahDiskon;

if (totalPembelian <= 0) {
  console.log('Harga tidak valid');
} else if (totalPembelian > 1_000_000) {
  diskon = 10;
  hargaSetelahDiskon = totalPembelian - totalPembelian / diskon;
} else if (totalPembelian > 500_000) {
  diskon = 5;
  hargaSetelahDiskon = totalPembelian - totalPembelian / diskon;
} else {
  diskon = 0;
  hargaSetelahDiskon = totalPembelian;
}
if (diskon != 0) {
  console.log(
    `Anda membeli ${jumlahBarang} ${namabarang} dengan harga ${hargaBarang} per-${namabarang}, Total harga sebelum diskon ${totalPembelian}`
  );
  console.log(
    `Selamat! anda mendapatkan diskon sebesar ${diskon}%, Harga setelah diskon : ${hargaSetelahDiskon}`
  );
} else {
  console.log(`Anda belum dapat diskon, harga total = ${totalPembelian}`);
}

console.log('\n===========SOAL 9============\n');

let n = 25;

for (let i = 2; i < n; i++) {
  isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

console.log('\n===========SOAL 10============\n');

const dataBilanganBulat = [2, 4, 6, 8, 10];
function cariRataRata(arr) {
  let totalData = 0;
  let jumlahData = 0;
  arr.forEach((data) => {
    totalData += data;
    jumlahData++; //arr.length
  });

  nilaiRataRata = totalData / jumlahData;
  console.log('Nilai Rata-rata : ', nilaiRataRata);
}
cariRataRata(dataBilanganBulat);

console.log('\n===========SOAL 11============\n');

let string1 = 'Hello World';
let string2 = 'Kiw, Gimana Kabarnya?';
let string3 = 'JAVaScRipT';

function hitungKapital(str) {
  let jumlahKapital = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (str[i].toUpperCase() != str[i].toLowerCase()) {
        jumlahKapital++;
      }
    }
  }
  console.log(
    `Jumlah huruf kapital pada test ${str} adalah : ${jumlahKapital}`
  );
}

hitungKapital(string1);
hitungKapital(string2);
hitungKapital(string3);

console.log('\n===========SOAL 12============\n');
/** soal 12 : for loop
 * buat function untuk mencari nilai tertinggi dari sebuah array
 */
const nilaiTertinggi = [1, 34, 21, 54, 6567, 98764, 23, 453];

function getNilaiTertinggi(array) {
  higher = 0;
  array.forEach((arr) => {
    higher = higher > arr ? higher : arr;
  });
  return higher;
}
console.log(getNilaiTertinggi(nilaiTertinggi));

console.log('\n===========SOAL 13============\n');
/** Soal 13 : for
 * buat fungsi untuk membuat piramid(segitiga sama kaki) yang terbuat dari bintang "*"
 * dengan jumlah baris yang ditentukan oleh user melalui parameter fungsi
 */

function pyramid(a) {
  for (let i = 0; i < a; i++) {}
}

pyramid(10);

console.log('\n===========SELESAI===========\n');
