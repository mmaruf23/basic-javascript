function pyramid(num) {
  let shape = ''
  for (let i = 1; i < num; i++) {
    for (let j = 1; j < num - i ; j++){
      shape += ' ';
    }
    for (let k = 0; k < i; k++){
      shape += '* '
    }
    shape+= "\n"
  }
  console.log(shape)
} 
pyramid(11)

