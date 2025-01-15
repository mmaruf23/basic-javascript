const employee = [
  {
    id: 1,
    nama: 'Danu',
    age: 25,
    jobDesk: [
      {
        title: 'Frontend',
        salary: 12_000_000,
      },
    ],
    hobby: ['Membaca', 'Menulis'],
  },
  {
    id: 2,
    nama: 'Dani',
    age: 26,
    jobDesk: [
      {
        title: 'Frontend',
        salary: 2_000_000,
      },
    ],
    hobby: ['Membaca', 'Menulis'],
  },
  {
    id: 3,
    nama: 'Dina',
    age: 27,
    jobDesk: [
      {
        title: 'Backend',
        salary: 3_000_000,
      },
    ],
    hobby: ['Membaca'],
  },
  {
    id: 4,
    nama: 'Deni',
    age: 26,
    jobDesk: [
      {
        title: 'Backend',
        salary: 4_000_000,
      },
    ],
    hobby: ['Membaca'],
  },
  {
    id: 5,
    nama: 'Dian',
    age: 27,
    jobDesk: [
      {
        title: 'Frontend',
        salary: 8_000_000,
      },
    ],
    hobby: ['Membaca'],
  },
];

/** Cari karyawan yang punya hobi "menulis" dan usianya diatas 25 tahun */ //find n includes

const findEmployee = employee.find((item) => {
  return item.age > 25 && item.hobby.includes('Menulis');
});
console.log('karyawan yang punya hobi "menulis" dan usianya diatas 25 tahun');

console.log(findEmployee);

/** Tampilkan data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3jt */ // filter n some

const filteredEmployee = employee.filter((item) => {
  return item.jobDesk.some(
    (job) => job.title == 'Backend' && job.salary > 3000000
  );
});
console.log(
  'data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3jt'
);

console.log(filteredEmployee);

/** Tampilkan nama karwayan yang punya satu hobi */ //filter , map n length

const filteredEmployeeOneHobbies = employee
  .filter((item) => item.hobby.length == 1)
  .map((item) => item.nama);

console.log('Tampilkan nama karwayan yang punya satu hobi');
console.log(filteredEmployeeOneHobbies);

/** Cari nama karyawan yang posisinya frontend dengan gaji tertinggi */ // filter, .some reduce find

// const highestfe = employee
//   .filter((kary) => {
//     return kary.jobDesk.some((job) => job.title == 'Frontend');
//   })
//   .reduce((acc, cur) => {
//     const a = cur.jobDesk.map((job) => job.salary)[0];

//     return acc > a ? acc : a;
//   }, 0);

// const fe = employee.find((kary) =>
//   kary.jobDesk.some((job) => job.salary == highestfe)
// ).nama;
// console.log('FE dengan gaji tertinggi : ', fe);
/*
const fe2 = employee.find((kary) =>
  kary.jobDesk.some((job) => {
    return (
      job.salary ==
      employee
        .filter((kary) => {
          return kary.jobDesk.some((job) => job.title == 'Frontend');
        })
        .reduce((acc, cur) => {
          const a = cur.jobDesk.map((job) => job.salary)[0];
          return acc > a ? acc : a;
        }, 0)
    );
  })
).nama;
*/
const feHigherSalary = employee
  .filter((item) => {
    return item.jobDesk.some((job) => job.title == 'Frontend');
  })
  .reduce((a, c) => {
    const highest = a.jobDesk.find((job) => job.title === 'Frontend').salary;
    const current = c.jobDesk.find((job) => job.title === 'Frontend').salary;

    return highest > current ? a : c;
  });

console.log('FE dengan gaji tertinggi', feHigherSalary.nama);

/** Cari nilai tertinggi dari 3 siswa menggunakan math obj */
let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;

function nilaiTertinggi(...nilai) {
  const tertinggi = Math.max(...nilai);
  console.log('Nilai siswa tertinggi adalah : ', tertinggi);
}
nilaiTertinggi(siswa1, siswa2, siswa3);

/** cari selisih gaji tertinggi dan terendah dari data employee menggunakan math */

const feSalary = employee
  .filter((kary) => {
    return kary.jobDesk[0].title == 'Frontend';
  })
  .map((kary) => {
    return kary.jobDesk.find((item) => item.salary).salary;
  });

const tertinggi = Math.max(...feSalary);
const terendah = Math.min(...feSalary);
// console.log(terendah);
// console.log(tertinggi);

console.log(
  `Selisih gaji fe tertinggi dan terendah : `,
  Math.floor(tertinggi - terendah)
);

//KOMBINASI

// -- Hitung total jadi semua karyawan setelah dipotong pajak 12% pake reduce dan math.floor
const allSalary = employee.map((kary) => {
  return kary.jobDesk.find((item) => item.salary).salary;
});

const newSalary = allSalary.reduce((a, c) => {
  return a + c;
}, 0);
const pajak = newSalary * 0.12;
console.log('GAJI TOTAL : ', newSalary);
console.log('PAJAK TOTAL : ', pajak);

const newSalaryCutted = Math.floor(newSalary - pajak);

console.log(
  'Total gaji semua karyawan setelah potong pajak :',
  newSalaryCutted
);

// -- tampilkan semua nama karyawan yang memiliki hobi terbanyak pake map, math.max, filter, length

const sumHobbies = Math.max(...employee.map((kary) => kary.hobby.length));
const employeeWithALotOfHobbies = employee
  .filter((kary) => kary.hobby.length == sumHobbies)
  .map((kary) => kary.nama);

// console.log(sumHobbies);
// console.log(Math.max(...sumHobbies));
console.log(`Karyawan dengan hoby yang banyak : `, employeeWithALotOfHobbies);
console.log(
  `Karyawan dengan hoby yang banyak : `,
  employeeWithALotOfHobbies.join(', ')
);

console.table(employee);
