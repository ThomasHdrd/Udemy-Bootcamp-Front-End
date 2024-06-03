import React, { useEffect } from 'react';
import { useState } from 'react';
import '../counter.css';

function Counter() {
    let count = 0;

    useEffect(() => {
      window.alert('I am clicked');
    })

    const [currentstate, updatestate] = useState(count);
    const handleclick = () => {
        updatestate(currentstate + 1);}

   return ( <>
     <div className="counter_parent">
     <div className="main-div">
    <h3>Counter</h3>;
    <button onClick={handleclick}>{currentstate} </button>
      </div>
      </div> 
  </>
   );
}

export default Counter;