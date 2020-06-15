import React,{useState} from 'react';
import './App.css';
import Parent from './Parent.js'
import ValueContext from './ValueContext';
function App() {
  //let [number,setNumber]=useState(20);
  let value=useState(34);
  return (
    <ValueContext.Provider value={value}>

    <div className="App">
      <h1>hello world</h1>
      <Parent />
        </div>
        </ValueContext.Provider>
  );
}

export default App;
