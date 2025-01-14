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
        salary: 4000000,
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
        salary: 8_000_0000,
      },
    ],
    hobby: ['Membaca'],
  },
];

const allSalary = employee.map(kary => {
  kary.jobDesk.map(job => job.salary);
  return kary.jobDesk.find(item => item.salary).salary;
});

const tertinggi = Math.max(...allSalary);
const terendah = Math.min(...allSalary)
console.log(terendah);
console.log(tertinggi);
