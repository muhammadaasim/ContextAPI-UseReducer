import React,{useReducer} from 'react';
import Counterreducer from './counter-reducer';
const Child2=()=>{
    let [state,dispatch]=useReducer(Counterreducer,10);

    return(
    <div>
    <h1>intial value of reduce is {state}</h1>
    <button onClick={()=>dispatch('INCREMENT')}>increase reduce val</button>
    </div>
);
}
export default Child2;