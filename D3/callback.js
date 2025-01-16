/** Callback : fungsi yang dikirim sebagai argumen/parameter ke fungsi lain
 *  ?? fungsi yang manggil fungsi lain.
 */

// -- Fungsi Callback

function printLog(callback) {
  console.log('Callback : ', callback);
}

function penjumlahan(a, b) {
  return a + b;
}

const pengurangan = (a, b) => a - b;

printLog(penjumlahan(2, 3));
printLog(pengurangan(3, 2));

function prosesData(callback, data) {
  console.log('Memproses data...');
  callback(data);
}

function tampilkanHasil(data) {
  console.log('Hasil data : ', data);
}

prosesData(tampilkanHasil, 'Data-data');

prosesData(function (data) {
  console.log('Cara lain : ', data);
}, "Data-data-data");
