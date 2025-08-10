// import { useState } from "react";
import useCounter from "../hooks/couter";

function Counter(){
    // let number = 1;
    // const [number,setNumber] = useState(0);
    // function handleClick(e){
    //     e.stopPropagation();
    //     setTimeout(()=>{
    //     setNumber(number=>number+1);
    //     },2000)
    //     console.log(number);   
    // }
    const [counter,increase,decrease] = useCounter(0);
    function handleIncrease(e){
        e.stopPropagation();
        increase();
    }
    function handleDecrease(e){
        e.stopPropagation();
        decrease();
    }

    return(
        <>
        <div style ={{display:'flex', position:'relative'}}>
        <button onClick={handleDecrease}>decrease</button>
        <h1 style={{color:'white'}}>{counter}</h1>
        <button onClick={handleIncrease}>increase</button>
        </div>
        </>
    )
}

export default Counter;