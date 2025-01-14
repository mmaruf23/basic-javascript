let myArray = [1, 2, 3, 4, 5];

// akses array berdasarkan indexnya
let nilaiPertama = myArray[0];
let nilaiKedua = myArray[1];
//dst

console.log(nilaiPertama);
console.log(nilaiKedua);

//mengubah nilai array pada index ttt
myArray[2] = 6;
console.log(`Array setelah diubah : ${myArray}`);

// ==== ARRAY METHOD : Untuk memanipulasi array

// -- Push : methode array untuk menambahkan data pada basir akhir array
myArray.push(7);

console.log(`push : ${myArray}`);

// -- Shift : Menghapus data pertama pada array
myArray.shift();
console.log(`shift : ${myArray}`);

// -- Unshift : Menambahkan data ke awal array
myArray.unshift(1, 2);
console.log(`unshift : ${myArray}`);

// -- Pop : Menghapus data terakhir dari array // dan mengambilnya
let nilaiTerakhir = myArray.pop();
console.log(`Pop : ${nilaiTerakhir}`);
console.log(`Popped Array : ${myArray}`);

// -- Splice : Menyisipkan data kedalam array
myArray.splice(2, 0, 3);
console.log(`Splice : ${myArray}`);

// -- Slice : Memotong / cut data dalam array
console.log('Index 4 : ', myArray[4]);

let slicedArray = myArray.slice(1, 4);
console.log(`Slice : ${slicedArray}`);

// -- Sort : mengurutkan data array secara ascending
myArray.sort();
console.log(`Sort : ${myArray}`);

// -- Reverse : Mengurutkan data array descending || membalikan urutan array
myArray.reverse();
console.log(`Reverse : ${myArray}`);

// -- IndexOf : Mencari index dalam array
let nilaiCari = 3;
let indexNilai = myArray.indexOf(nilaiCari);

if (indexNilai != -1) {
  console.log(`Nilai ${nilaiCari} ditemukan pada index ke- ${indexNilai}`);
} else {
  console.log(`Nilai ${nilaiCari} tidak ditemukan dalam array`);
}

// -- Concat : Menggabungkan 2 array
let arrayLain = [7, 8, 9];
let gabungArray = myArray.concat(arrayLain);

console.log(`Concat : ${gabungArray}`);

// -- forEach : Melakukan perulangan/iterasi pada array
myArray.forEach((i) => {
  console.log(`ForEach : ${i}`);
});

// -- toString : Mengubah data array menjadi string
console.log(myArray.toString());

// -- toLocalString : Mengubah data array menjadi string dalam format lokal.
const price = [1000, 2000, 3000];
const arrayToLocalString = price.toLocaleString({
  style: 'currency',
  currency: 'IDR',
});

console.log(`ArrayToLocalString : ${arrayToLocalString}`);

// -- Reduce : Mengakumulasi nilai array kedalam satu hasil akhir // Menotalkan data array.
const sum = myArray.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue;
}, 0);

console.log(`Reduce : ${sum}`);

const dataSiswa = [
  {
    id: 1,
    name: 'Rifa',
    age: 23,
    hobby: ['Membaca, Menulis'],
  },
  {
    id: 2,
    name: 'Rafi',
    age: 24,
    hobby: ['Membaca, Menggambar'],
  },
  {
    id: 3,
    name: 'Rafa',
    age: 25,
    hobby: ['Memasak, Menangis'],
  },
  {
    id: 4,
    name: 'Rofi',
    age: 26,
    hobby: ['Gaming, Menyanyi'],
  },
];

// Contoh lain forEach
const feDataSiswa = dataSiswa.forEach((data) => {
  console.log(`forEach data siswa ${data.name} ${data.age <= 25}`);
});

// -- Map : Mengubah setiap element array menjadi nilai baru || mapping data tertentu.
const getNameFromDataSiswa = dataSiswa.map((item) => {
  return { name: item.name, age: item.age };
});

console.log(`Mapping data siswa`, getNameFromDataSiswa);

// -- Filter : Memfilter data array berdasarkan kondisi tertentu

const filterDataSiswa = dataSiswa.filter((item) => {
  return item.age >= 25;
});

console.log(`Filter data siswa : `, filterDataSiswa);

// -- Find : Mencari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
  return data.name === 'Rifa';
});

console.log(`Find data siswa :`, findDataSiswa);

// -- length : Menghitung panjang jumlah/panjang data dalam array

let lengthDataSiswa = dataSiswa.length;
console.log(lengthDataSiswa);

// -- Every : Mengecek apakah semua elemen array memenuhi suatu kreteria

const everyDataSiswa = dataSiswa.every((item) => {
  return item.age === 25;
});

console.log(everyDataSiswa);
