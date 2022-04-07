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