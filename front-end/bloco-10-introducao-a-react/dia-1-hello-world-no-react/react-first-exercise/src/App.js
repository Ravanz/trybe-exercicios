import React from 'react';

const Task = (value) => {
  return (
    <li key={value} >{value}</li>
  );
}

const dailyTask = ['Acordar', 'Agradecer', 'Levantar', 'Arrumar a cama', 'Tomar café da manhã', 'Limpar a casa']

class App extends React.Component {
  render() {
    return (
      <ul>{ dailyTask.map(dailyTask => Task(dailyTask)) }</ul>
    );
  }
}

export default App;