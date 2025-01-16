console.log('===Pertama');
function printLog() {
  console.log('===Kedua');
}
setTimeout(printLog, 3000); // Menunda eksekusi fungsi selama 3 detik
console.log('===Ketiga');

setTimeout(myFunction, 3000); // Menunda eksekusi fungsi selama 3 detik

function myFunction() {
  console.log('I Love You?');
}
