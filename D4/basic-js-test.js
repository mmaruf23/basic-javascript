const carProducts = [
  {
    id: 1,
    name: 'ESEMKA SUV 4x4 Hybrid',
    price: null,
    tag: ['Produk Terlaris'],
    variant: [
      {
        color: 'black',
        transmission: 'automatic',
        type: 'hybrid',
        fuelType: 'pertalite',
      },
      {
        color: 'silver',
        transmission: 'manual',
        type: 'hybrid',
        fuelType: 'pertalite',
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: 'BAGATATA Hyper Car V12',
    price: 370_000_000_000,
    tag: ['Produk Terlaris', 'Promo'],
    variant: [
      {
        color: 'black',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'premium',
      },
      {
        color: 'white',
        transmission: 'manual',
        type: 'engine',
        fuelType: 'premium',
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: 'FIRIRIRI F8 Hyper Car Limited Edition',
    price: 4400000000,
    tag: ['Produk Terbaru', 'Promo'],
    variant: [
      {
        color: 'red',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'pertalite',
      },
      {
        color: 'white',
        transmission: 'manual',
        type: 'engine',
        fuelType: 'pertalite',
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: 'LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid',
    price: 7000000000,
    tag: ['Produk Terbaru'],
    variant: [
      {
        color: 'black',
        transmission: 'automatic',
        type: 'hybrid',
        fuelType: 'pertamax turbo',
      },
      {
        color: 'blue',
        transmission: 'automatic',
        type: 'hybrid',
        fuelType: 'pertamax turbo',
      },
      {
        color: 'green',
        transmission: 'automatic',
        type: 'hybrid',
        fuelType: 'pertamax turbo',
      },
      {
        color: 'red',
        transmission: 'automatic',
        type: 'hybrid',
        fuelType: 'pertamax turbo',
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: 'TOYOTA Land Cruiser Prado 4x4',
    price: 250000000,
    tag: ['Produk Terlaris'],
    variant: [
      {
        color: 'matte black',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'solar',
      },
      {
        color: 'army',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'solar',
      },
      {
        color: 'white',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'solar',
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: 'Wuling YangWang U9 EV',
    price: null,
    tag: ['Produk Terbaru'],
    variant: [
      {
        color: 'matte black',
        transmission: 'automatic',
        type: 'electric',
        fuelType: 'battery',
      },
      {
        color: 'navy',
        transmission: 'automatic',
        type: 'electric',
        fuelType: 'battery',
      },
      {
        color: 'white',
        transmission: 'automatic',
        type: 'electric',
        fuelType: 'battery',
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: 'Beat Esp 110 Second',
    price: 7500000,
    tag: ['Produk Terlaris', 'Bekas'],
    variant: [
      {
        color: 'black',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'pertamax turbo',
      },
      {
        color: 'navy',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'pertamax turbo',
      },
      {
        color: 'white',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'pertamax turbo',
      },
      {
        color: 'red',
        transmission: 'automatic',
        type: 'engine',
        fuelType: 'pertamax turbo',
      },
    ],
    isPreorder: false,
  },
];



// SOAL :
/** 1
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * reduce/math
 */
console.log('\n =============== SOAL 1\n');
const tertinggi = carProducts.reduce((a, c) => {
  return a.price > c.price ? a : c;
});
const terendah = carProducts.reduce((a, c) => {
  return a.price < c.price ? a : c;
});
console.log('Data Mobil tertinggi : ', tertinggi);
console.log('Data Mobil terendah : ', terendah);

/** 2
 * filter dan tampilkan data mobil dengan tag "Promo"
 */
console.log('\n =============== SOAL 2\n');

const carPromo = carProducts.filter((car) => car.tag.includes('Promo'));
console.log(carPromo);

/** 3
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
 */
console.log('\n =============== SOAL 3\n');
const carInPriceOrder = carProducts.sort((a, b) => b.price - a.price);
console.log(carInPriceOrder);

/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 */
console.log('\n =============== SOAL 4\n');
const engine = carProducts.filter((car) =>
  car.variant.some((vari) => vari.type == 'engine')
);
const hybrid = carProducts.filter((car) =>
  car.variant.some((vari) => vari.type == 'hybrid')
);
const electric = carProducts.filter((car) =>
  car.variant.some((vari) => vari.type == 'electric')
);
console.log({ engine: engine, hybrid: hybrid, electric: electric });

/** 5
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */

const fs = require('fs');
fs.readFile('./carProducts.json', (err, data) => {
  if (err) {
    console.log(err);
  }
  const cars = JSON.parse(data).sort((a, b) => b.price - a.price);
  writeOrderFile(cars); //  memanggil fungsi  SOAL nomor 5
});

function writeOrderFile(data) {
  fs.writeFile('./carProducts.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
    console.log('\n =============== SOAL 5\n');
    console.log('File carProducts.json berhasil diurutkan!');
    writeAddNewCars(data); //  memanggil fungsi  SOAL nomor 6
  });
}

/** 6
 * Bua
 * fs.writeFileSync('', data)t fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
 */

function writeAddNewCars(data) {
  // fungsi akan dipanggil saat nomor 5 (mengurutkan product) selesai diproses
  // console.log(data);

  const newCar = {
    id: 8,
    name: 'MOBIL baru',
    price: 300_000_000,
    tag: ['Promo'],
    variant: [
      {
        color: 'white',
        transmission: 'automatic',
        type: 'hybrid',
        fuelType: 'pertalite',
      },
      {
        color: 'silver',
        transmission: 'manual',
        type: 'hybrid',
        fuelType: 'pertalite',
      },
    ],
    isPreorder: false,
  };

  const newDataCar = [...data, newCar];

  fs.writeFileSync(
    './addNewCarProducts.json',
    JSON.stringify(newDataCar, null, 2),
    'utf-8'
  );
  console.log('\n =============== SOAL 6\n');
  console.log('Berhasil menambahkan products ke carProducts.json !');
}
/** 7
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */
function selisihHarga() {
  const carProductsValidPrice = carProducts.filter((car) => car.price != null);
  const tertinggi = carProductsValidPrice.reduce((a, c) => {
    if (c.price == null) return a;
    return a.price > c.price ? a : c;
  });
  const terendah = carProductsValidPrice.reduce((a, c) => {
    if (c.price == null) return a;

    return a.price < c.price ? a : c;
  });
  return tertinggi.price - terendah.price;
}
console.log('\n =============== SOAL 7\n');
console.log(
  'Selisih harga mobil tertinggi dan terendah adalah : ',
  selisihHarga()
);

/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 */
console.log('\n =============== SOAL 8\n');
function mostVarian() {
  const varianTerbanyak = Math.max(
    ...carProducts.map((car) => car.variant.length)
  );
  const carWithMostVarian = carProducts.filter(
    (car) => car.variant.length == varianTerbanyak
  );
  return carWithMostVarian;
}
console.log('Data mobil dengan varian terbanyak : \n', mostVarian());

/** 9
 * buat fungsi untuk mencari mobil yang tidak preorder
 */
console.log('\n =============== SOAL 9\n');

function getCarNotPreorder() {
  const notPreorderCar = carProducts.filter((car) => car.isPreorder == false);
  return notPreorderCar;
}
console.log('Data mobil yang tidak preorder :', getCarNotPreorder());

/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */
console.log('\n =============== SOAL 10\n');

function triangle(num) {
  let shape = '';
  for (let i = 1; i < num; i++) {
    for (let j = 1; j < num - i; j++) {
      shape += ' ';
    }
    for (let k = 0; k < i; k++) {
      shape += '* ';
    }
    shape += '\n';
  }
  console.log(`\n${shape}\n`);
}
triangle(20);

/** BONUS FREE 1  SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */

console.log('\n =============== SOAL 11\n');

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
console.log(`Berhasil menghapus employee Dina dan Dian. \n`);
console.table(employee);
