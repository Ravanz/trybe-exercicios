const a = 5
const b = 6
const c = 3

const Adição = a + b
const Subtração = a - b
const Multiplicação = a * b
const Divisão = a / b
const Módulo = a % b

console.log(Adição, Subtração, Multiplicação, Divisão, Módulo)


if (a > b){
  console.log(a)
} else {
  console.log(b)
}

if (a > b){
  if (a > c)
    console.log(a)
  else 
    console.log(c)
} else if (c > b){
  if (c > a)
    console.log(c)
} else 
  console.log(b)