const person = {
  nama: 'Rifa',
  umur: 30,
  pekerjaan: 'wengdev',
  alamat: {
    jalan: 'Jl. Jalan Tiap Hari 1',
    kota: 'Kansawah',
    negara: 'Konoha',
  },
  hobi: ['Olahraga', 'Music', 'Membaca'],
};

// -- Akses nilai dalam object dengan titik
console.log('nama : ', person.nama);
console.log('kota asal : ', person.alamat.kota);

// -- akses data array dalam object
console.log('hobi : ', person.hobi[1]);

// -- Mengubah nilai dalam object
person.umur = 25;
console.log(person);

// -- Menambah file baru dalam object
person.isMarried = false;
console.log(person);

// -- Menghapus field dalam object
delete person.alamat.jalan;
console.log(person);

// -- mengakses object dengan desctructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);
