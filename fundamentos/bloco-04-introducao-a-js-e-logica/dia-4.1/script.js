<<<<<<< HEAD
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
=======
const currentHour = 7
let message = ""

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do Almoço"
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado"
} 
console.log(message)

let weekDay ="Quarta-feira"
if (weekDay = "segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira") {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else if (weekDay ="Sábado" || "Domingo") {
  console.log('FINALMENTE, descanso merecido UwU')
}

const ravan = "lindo"
console.log(ravan)

let pessoaCandidata = "recuperação";
switch (pessoaCandidata) {
  case "Aprovada":
    console.log("Aprovada");
    break;
  
  case "Lista":
    console.log("Em análise");
    break;
  
  case "Reprovada":
    console.log("Reprovada");
    break;

  default:
    console.log("não se aplica")
}
>>>>>>> main
