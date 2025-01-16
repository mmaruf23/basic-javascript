/** Promise : object yang mewakili hasi dari operasi async */

function dataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4, 5];
    if (data) {
      resolve(data);
    } else {
      reject('Data tidak ditemukan');
    }
  });
}
console.log(dataFromServer());
/*
dataFromServer() // .then : untuk menangani hasil ketika Promise terpenuhi ?? data berhasil diambil.
  .then((result) => {
    // result : paramater yang berisi nilai hadil Promise.
    console.log('Get data : ', result);
  })
  .catch((err) => {
    // .catch : untuk menampilkan error ketika promise gagal mengambil data.
    console.log('Gagal : ', err);
  });
*/

console.log('===== PARALEL PROMISE ');
const getFirstData = () => {
  return new Promise((resolve, reject) => {
    resolve('Data ke - 1');
  });
};
const getSecondData = () => {
  return new Promise((resolve, reject) => {
    // reject('Data ke - 2. direject');
    resolve('Data ke - 2');
  });
};
const getAllData = () => {
  return Promise.all([getFirstData(), getSecondData()]);
};

getAllData() // -- Saat ada salah satu promise yang reject maka akan mengembalikan reject.
  .then((result) => {
    console.log('All data : ', result);
  })
  .catch((err) => {
    console.log(err);
  });
