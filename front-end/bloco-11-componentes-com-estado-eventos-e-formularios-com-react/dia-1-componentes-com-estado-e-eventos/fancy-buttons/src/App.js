import React from 'react';

function handleClickButton1() {
  console.log('CLicou no botão 1')
}
function handleClickButton2() {
  console.log('CLicou no botão 2')
}
function handleClickButton3() {
  console.log('CLicou no botão 3')
}

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={ handleClickButton1 }>Botão 1</button>
        <button onClick={ handleClickButton2 }>Botão 2</button>
        <button onClick={ handleClickButton3 }>Botão 3</button>
    </>
    )
  }
}

export default App;
