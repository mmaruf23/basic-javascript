const fs = require('fs');
const { title } = require('process');

/** Soal 1
 * Buat perintah untuk baca file JSON bernama employee.json
 * yang berisi data JSON dan tampilkan semua nama-nama karyawan
 * -> readfile
 */
console.log('\n====== SOAL 1 ======\n');
const employee = fs.readFileSync(
  './employee.json',
  'utf-8',
  function (err, data) {
    if (err) {
      console.log(err);
      return err;
    }
    return data;
  }
);

const dataEmployee = JSON.parse(employee);
console.log('Nama-nama karyawan : ');

dataEmployee.forEach((emp) => {
  console.log(emp.nama);
});

/** Soal 2
 * buat perintah untuk menambahkan minimal 1 data JSON kedalam file bernama employee.json
 * -> readfile & replace dengan writefile
 */
if (!dataEmployee.some((emp) => emp.id == 6)) {
  dataEmployee.push({
    id: 6,
    nama: 'Doni',
    age: 24,
    jobDesk: [
      {
        title: 'Backend',
        salary: 5_000_000,
      },
    ],
    hobby: ['Gaming', 'Membaca'],
  });
}

const newDataEmployee = JSON.stringify(dataEmployee);
fs.writeFile('./employee.json', newDataEmployee, 'utf-8', (err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log('\n====== SOAL 2 ======\n');
  console.log('Data berhasil ditambahkan.');
});

/** Soal 3
 * buat perintah untuk menacari karyawan yang usianya diatas atau sama dengan 26 dan simpan datanya kedalam file baru, bernama karyawan_tuwir.json
 * -> readfile & writefile
 */

const agedEmployee = dataEmployee.filter((emp) => emp.age >= 26);

fs.writeFile(
  './karyawan_tuwir.json',
  JSON.stringify(agedEmployee),
  'utf-8',
  (err) => {
    if (err) {
      console.log(err);
      return err;
    }
    console.log('\n====== SOAL 3 ======\n');
    console.log('Data berhasil ditambahkan.');
  }
);

/** Soal 4
 * buat perintah untuk menghapus semua karyawan dengan id = 1 dari data employee.json
 * lalu simpan perubahan datanya  di file baru bernama deleted_data.json
 * -> readfile & writefile
 */

const deletedEmployee = dataEmployee.filter((emp) => emp.id != 1);

fs.writeFile(
  './deleted_data.json',
  JSON.stringify(deletedEmployee),
  'utf-8',
  (err) => {
    if (err) {
      console.log(err);
      return err;
    }
    console.log('\n====== SOAL 4 ======\n');
    console.log('Data berhasil ditambahkan.');
  }
);

// JSON parse untuk mengubah array of object jadi JSON
// JSON stringify untuk mengubah data json ke string
