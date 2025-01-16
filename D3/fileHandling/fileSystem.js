/** Di Node.js terdapat modul-modul bawaan yang berfungsi untuk file handling.
 *  salahsatunya modul fs. ; untuk membaca dan membuat/write file.
 */

// -- Import modulnya.
const fs = require('fs');

// -- Create : Menulis file menggunakan .writeFile("FilePath", "IsiFile", encoding, return)
fs.writeFile(
  './textFile.txt',
  'Halo , aku adalah seorang junior programmer ',
  'utf-8',
  (err) => {
    if (err) {
      console.log('Terjadi error : ', err);
    }
    console.log('File berhasil disimpan');
  }
);

let dataDariAPI = 'yang ganteng \n dan sedang mencari pekerjaan';

fs.appendFile('./textFile.txt', dataDariAPI, 'utf8', (err) => {
  if (err) throw err;
  console.log('Data berhasil diedit!');
});

fs.readFile('./textFile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log('Data yang dibaca : ', data);
});

fs.unlink('./textFile.txt', (err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log('Data berhasil dihapus');
});
