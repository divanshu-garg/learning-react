import { useState } from "react";

function Counter(){
    // let number = 1;
    const [number,setNumber] = useState(0);
    function handleClick(e){
        e.stopPropagation();
        setTimeout(()=>{
        setNumber(number=>number+1);
        },2000)
        console.log(number);
        
    }

    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>click</button>
        </>
    )
}

export default Counter;