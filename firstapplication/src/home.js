import React from "react";
import { useNavigate } from "react-router-dom";

function home() {
    const navigate = useNavigate()

    const handleclick = () => {
        navigate("/about")
    }
    
return (
   <>
     <p> Home Page </p>
     <button onClick={handleclick}>Click Me </button>
   </>
);
}
export default home;