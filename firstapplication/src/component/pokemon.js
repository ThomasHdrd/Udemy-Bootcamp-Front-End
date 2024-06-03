import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [moves, setmoves] = useState();

    useEffect(() => {
        async function getData() {
            if (num) {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmoves(res.data.moves.lenght);
      }
    }
        getData();
    }, [num]);

    return (
    <>
      <h1>You choose <span style={{ color: 'red'}} > {num} </span> </h1>
      <h1>My name is <span style={{ color: 'red'}}> {name} </span> </h1>
      <h1>I have <span style={{ color: 'red'}}> {moves} </span> </h1>

     <select 
       value={num} 
       onChange={(event) => {
         setnum((event.target.value)); 
      }}
     >
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>
    </>    
   ); 
};

export default Pokemon;