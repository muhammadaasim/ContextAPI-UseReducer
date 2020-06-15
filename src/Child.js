import React,{useContext} from 'react';
import ValueContext from './ValueContext';
function Child() {
  let value=useContext(ValueContext);
    return (
    <div className="App"> 
      <h1>Chilld</h1>
  <p>Got Number from Parent {value[0]}</p>
  <button onClick={()=>{value[1](++value[0])}}>Increament By Context</button>
    </div>
  );
}

export default Child;
