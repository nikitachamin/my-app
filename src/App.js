
import './App.css';
import {Provider} from 'react-redux';

import ThemeSwitchRedux from './components/ThemeSwitchRedux';
import store from './components/store/ThemeStore';
import Content from './components/content';




// export const ThemeContext = createContext();
// export const UserContext = createContext("Гость");



// const UserNameInput = () => {
//   const {setUserName} = useContext(UserContext);
//   const [inputValue, setInputValue] = useState('');
  

//   const handleInputChange = (event) =>{
//     setInputValue(event.target.value);
//   }
  
//   const changeName = () => {
//     setUserName(inputValue)
    
//   }
//     return(
//       <div>
//         <input value={inputValue} onChange={handleInputChange} />
//         <button onClick={changeName}>Измекнить имя пользователя</button>
//       </div>
//     )
    
  
// };

// const ThemeToggle = () => {
//   const {theme, toggleTheme} = useContext(ThemeContext);
//   return (
//     <button onClick={toggleTheme}> Нажми чтобы переключить на {theme === 'light'? 'темную' : 'светлую'} тему</button>
//   )
// };

// function App() {

//   const [theme, setTheme] = useState('light');
//   const [userName, setUserName] = useState('Гость');

//   const toggleTheme = () => {
//     setTheme((currentTheme => (currentTheme === 'light'? 'dark' : 'light')));
//   };

//   return (
//    <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <UserContext.Provider value={{userName, setUserName}}>
//         <div className='content' style={{color: theme === 'light'? 'black' : 'white', background: theme === 'light'? 'white' : 'black'}}>
//           <Header />
//           < ThemeToggle />
         
//           <UserNameInput  />
//         </div>
//       </UserContext.Provider>
//    </ThemeContext.Provider>
//   );
// }

// 

function App() {
  return(
    <Provider store={store} >
      <Content />
      <ThemeSwitchRedux />
    </Provider>
  )
}

export default App;