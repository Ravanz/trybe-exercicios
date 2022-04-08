// calculadora operações básicas
const a = 5
const b = 6
const c = 3
const d = 0
const e = 0

const Adição = a + b
const Subtração = a - b
const Multiplicação = a * b
const Divisão = a / b
const Módulo = a % b

console.log(Adição, Subtração, Multiplicação, Divisão, Módulo)

// comparador entre 2 grandezas
if (a > b){
  console.log(a)
} else {
  console.log(b)
}

//comparador entre 3 grandezas

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

  //determinar positivo, negativo e zero


if (d > 0){
  console.log("positive");
} else if (d < 0){
  console.log("negative");
} else {
  console.log("0");
}

if (e < 0){
  console.log (e + " é negativo")
} else if (e > 0){
  console.log (e + " é positivo")
} else {
  console.log (e + " é zero")
}



