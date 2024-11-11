import { createContext , useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

export const Them = createContext();
export const AllTodo = createContext();

function App() {
  let [themToggles , setThemToggle] = useState('light');
  let [allTodo , setAllTodo] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = themToggles === 'light' ? "#3e68a3" : '#2f4156';
  }, []);

  return (
    <AllTodo.Provider value={[allTodo , setAllTodo]}>
    <Them.Provider value={[themToggles,setThemToggle]}>
     <Home />
     </Them.Provider>
    </AllTodo.Provider>

  );
}

export default App;
