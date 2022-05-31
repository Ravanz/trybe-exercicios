function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = parseInt(value1) + parseInt(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}
const verify = (value1, value2) => {
  if (!value1 || !value2) {
  throw new Error ('Digite os dous números')
  } 
} 
module.exports = { sum } 
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}