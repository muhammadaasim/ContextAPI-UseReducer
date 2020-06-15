import React from 'react';
import Child from './Child.js'
import Child2 from './child2'
function Parent() {
  return (
    <div className="App">
      <h1>Parent</h1>
      <Child/>
      <Child2/>
      {/* <Child num={props.num}/> */}
    </div>
  );
}

export default Parent;
