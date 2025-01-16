/**
 * Secara default bahasa pemrograman dieksekusi secara berurut (SYNCRONOUS) dari a - z, dari 1 - 100
 * ASYNCRONOUS : teknik eksekusi kode secara paralel tanpa harus menunggu eksekusi program yang lain selesai,
 * artinya fungsi yang dibuat dengan teknik asyncronus akan dijalankan bersamaan dengan kode lainnya.
 */

// Regular Function :
function getDataFromServer() {
  // -- Promise : Sebuah object yang mewakili hasil dari operasi asyncronous
  return new Promise(function (resolve, reject) {
    let data = {
      id: 1,
      name: 'Rifa',
      job: 'WengDev',
    };
    if (data) {
      resolve(data); // -- resolve : mengembalikan data yang berhasil ditangkap
    } else {
      reject('Data tidak ditemukan!'); // -- reject : mengembalikan error jika data gagal diambil
    }
  });
}
// console.log(getDataFromServer());

async function fetchData() {
  // -- TryCatch : error handling untuk menangani error jika data gagal diambil.
  try {
    const getData = await getDataFromServer(); // -- await : kata kunci dalam async untuk menunggu hasil dari sebuah promise
    console.log('data yang diterima : ', getData);
  } catch (error) {
    // -- error : mengembalikan pesan error jika terjadi kesalahan.
    console.log('Terjadi kesalahan saat mengambil data : ', error);
  }
}
fetchData();

// -- Contoh lain ngambil data dari fakeAPI
async function fetchUserData(userId) {
  try {
    console.log('Ceritanya lagi ngambil data dari API');

    // -- Tampung data yang diambil di variabel response
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    // console.log('Rescponse : ', response);
    // -- Error handling menggunakan throw Exception untuk mengecek apakah response sudah sesuai. (code 200 - 500++)
    if (!response.ok) {
      throw new Error(
        `HTTP Error! status : ${response.status} => ${response.statusText}`
      );
    }
    // -- Konversi data response ke format JSON
    let user = await response.json();

    console.log('Data user by ID : ', user);
  } catch (error) {
    // -- Menambilkan peran error jika ada kesalahan.
    console.log('Error : ', error);
    // throw error;
  }
  console.log('Sampe bawah');
}

fetchUserData(11);
