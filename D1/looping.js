// ---- WHILE LOOP
let startCondition = 1;
while (startCondition < 5) {
  console.log('While Loop ke-', startCondition);
  startCondition++;
}

// ---- FOR LOOP
for (let i = 0; i < 5; i++) {
  console.log('For Loop ke-', i);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i in array) {
  console.log('Loop ke-', i);
}
/**
 * array.forEach((element) => {
 * console.log('Loop ke-', element);
 * });
 */

let hitung = 0;
let i = 0;
// Another While Loop
while (i < array.length) {
  if (array[i] > 3) {
    hitung++;
  }
  i++;
}
console.log(`Jumlah element yang lebih besar dari 3 : ${hitung}`);

// ---- isPrime
i = 1;
let prime;

while (i < 20) {
  let j = 2;
  let isPrime = true;
  while (j < i) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
    j++;
  }
  if (isPrime) {
    console.log(i);
  }
  i++;
}
