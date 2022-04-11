// Função para exibir os itens de um array
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nomes of names){
  console.log(nomes)
}

// Função para exibir uma fatorial
let num = 3
let fat = 1

for(let i = 1; i <= num; i++){
  fat = fat * i
}
console.log(num + "! = " + fat)

// Função para inverter palavras
let word = 'ravan'
let inverse = ''

for(let i = word.length - 1; i >= 0; i--){
  inverse += word[i]
}
console.log(inverse)  

//Função para retornar a menor string e maior string dentro de um array

let array = ['java', 'javascript', 'python', 'html', 'css',];
let menor = array[0]
let maior = array[0]

for (let i = 0; i < array.length; i++) {
  if(array[i].length < menor.length) {
    menor = array[i]
  }
}
 console.log(menor)


for (let i = 0; i < array.length; i++) {
  if(array[i].length > maior.length) {
    maior = array[i]
  }
}
 console.log(maior)
