/** TryCatch untuk error handling */

function penjumlahan(a, b) {
  try {
    if (a === 0 || b === 0) {
      throw new Error('Nilai tidak valid');
    }
    return a + b;
  } catch (error) {
    // console.log(error);
    return error;
  }
}

console.log('OK : ', penjumlahan(1, 2));
console.log('NOK : ', penjumlahan(0, 0));

console.log("OKOK");
