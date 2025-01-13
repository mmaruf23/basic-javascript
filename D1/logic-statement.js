/**
 * A.K.A PERCABANGAN
 */
let remoteButton = 2;
switch (remoteButton) {
  case 1:
    console.log('TURN ON');
    break;
  case 0:
    console.log('TURN OFF');
    break;

  default:
    console.log('Aja sendiri!');
    break;
}

// -------- IF STATEMENT
let nilai = 100;
if (nilai == 100) {
  console.log('Selamat anda mendapatkan nilai sempurna');
}
// -------- IF ELSE STATEMENT
if (nilai == 100) {
  console.log('Selamat anda lulus!');
} else {
  console.log('Aja sendiri!');
}

// -------- (IF) ELSE IF STATEMENT

let pendafataran = "close";
let kuota = 10;
if (pendafataran == "open"){
  console.log("Pendaftaran sukses");
} else if (kuota <= 10) {
  console.log("Kuota masih tersedia");
} else {
  console.log("Aja sendiri!");
}

// ------- NESTED IF
let nilaiUas = 92;
if (nilaiUas >= 70){
  if (nilaiUas >= 90) {
    console.log("Nilai A");
  } else {
    console.log("NIlai B");
  }
} else {
  console.log("Nilai C");
  
}

// ------- TERNARY 

let hasil = nilaiUas > 70 ? "Lulus" : "Tidak";
console.log(hasil);

