const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEven = () => {
  oddsAndEvens.sort((a,b) => a - b);
  
  return oddsAndEvens;
  
} 

console.log(`Os números ${sortOddsAndEven()} se encontram ordenados de forma crescente!`) // será necessário alterar essa linha 😉