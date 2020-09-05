import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
export const CountContext = createContext();

function App() {
  const [count,setCount] = useState([]);
  return (
    <CountContext.Provider value={[count,setCount]}>
      <Home></Home>
    </CountContext.Provider>
  );
}

export default App;
