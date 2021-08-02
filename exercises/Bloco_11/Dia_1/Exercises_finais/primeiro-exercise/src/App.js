import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayOfTasks = ['Ir para o volley', 'Ir para a aula', 'Ir para a academia'];

function App() {
  return arrayOfTasks.map((task) => Task(task));
}

export default App;
