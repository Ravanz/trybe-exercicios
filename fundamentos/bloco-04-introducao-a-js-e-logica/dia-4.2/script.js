let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//console.log(numbers)
let soma = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 2) {
            soma += numbers[i];
        }
    }
   

   let media = soma / numbers.length

   console.log(media)
   if (media > 20) {
     console.log("Valor maior que 20")
   } else {
     console.log("Valor menor ou igual a 20")
   }
   let maiorValor = 0
   for (let 