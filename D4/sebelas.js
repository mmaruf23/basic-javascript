const employee = [
  {
    id: 1,
    nama: 'Danu',
    age: 25,
    jobDesk: [
      {
        title: 'Frontend',
        salary: 12000000,
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
        salary: 2000000,
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
        salary: 3000000,
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
        salary: 8000000,
      },
    ],
    hobby: ['Membaca'],
  },
];

console.log('\n === CREATE\n');
const newEmp = {
  id: 6,
  nama: 'Doni',
  age: 24,
  jobDesk: [
    {
      title: 'Front',
      salary: 5_000_000,
    },
    {
      title: 'Backend',
      salary: 5_000_000,
    },
  ],
  hobby: ['Gaming', 'Membaca'],
};

const jumlahEmployeeNow = employee.push(newEmp);
console.log('Employee berhasil ditambah!');
console.log('Jumlah data Employee saat ini : ', jumlahEmployeeNow);

console.log('\n === READ\n');
console.log('Data Employee : ');
console.log(employee);
console.table(employee);

console.log('\n === UPDATE\n');
//update hobi dan salary salah satu job
let index = 5;
let newHobby = 'Ngoding';
const emp = employee[index];
emp.hobby.push(newHobby);
emp.jobDesk.find((job) => job.title == 'Backend').salary = 20_000_000;

console.log(
  `Employee ${emp.nama} berhasil menambah hobi dan update salary pada job Backend`
);
console.table(employee[index]);

console.log('\n === DELETE\n');

//delete emp dina dan dian
indexDina = employee.findIndex((emp) => emp.nama == 'Dina');
employee.splice(indexDina, 1);
indexDian = employee.findIndex((emp) => emp.nama == 'Dian');
employee.splice(indexDian, 1);
console.table(employee);
