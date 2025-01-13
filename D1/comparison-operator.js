// EQUALS
console.log('----EQUALS');
const a = 10;
const b = '10';
console.log(a == b);
console.log(a === b); //STRICT EQUALS

//NOT EQUALS
console.log('----NOT EQUALS');
console.log(a != b);
console.log(a !== b); //STRICT NOT EQUALS

console.log('----DARI <>');
console.log(2 < 1);
console.log(1 > 2);
console.log(1 >= 2);
console.log(2 <= 2);

// KONDISIONAL
console.log('----KONDISIONAL');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//DAN LAIN SEBAGAINYA HEHE

const user = {
  name: 'Nama',
  age: 23,
  address: {
    city: 'Chiba',
    country: 'Japan',
  },
};
console.log(user && user.address && user.address.country);
console.log(user.address.country);
