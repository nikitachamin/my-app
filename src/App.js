import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Time from './components/Time';
import EventCard from './components/EventCard';
import Counter from './components/counter';
import TextInput from './components/TextInput';
import TodoList from './components/ToDoList';
import Timer from './components/Timer';
import GetComments from './components/CommentsList';



function App() {
  return (
    <div className="App">
    <Counter />
    <TextInput />
    <TodoList />
    <Timer />
    <GetComments />
    </div>
  );
}

export default App;
