import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Timer from './components/Timer';
import Counter from './components/counter';
import ThemeSwitcher from './components/ThemeSwitcher';
import TextDisplayForm from './components/textInputField';
import GetTemperature from './components/temperature';
import TodoList from './components/ToDoList';




function App() {
  return (
    <div className="App">
    <TodoList />
     </div>
  );
}

export default App;
