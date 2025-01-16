// -- Modul untuk input ke terimal.
const rl = require('readline');

// -- Buat interface/tampilan untuk input ke terminal
const inputNama = rl.createInterface({
  input: process.stdin, // -- Mengambil input dari keyboard user
  output: process.stdout, // -- Menampilkan output ke terminal
});

// -- Memanggil inputan ?? interface?
// -- .question : untuk nampilin pertanyaan ke user.

/**
inputNama.question('Masukan nama: ', (nama) => {
  console.log(`Halo ${nama}`);
  inputNama.close();
});
*/

// -- Contoh dua input
inputNama.question('Masukan nama: ', (nama) => {
  inputNama.question('Kamu usia berapa? :', (usia) => {
    console.log(`Halo ${nama}, kamu sekarang berusia ${usia}`);
    inputNama.close();
  });
});
