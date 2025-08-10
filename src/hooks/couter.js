import { useState } from "react";

function useCounter(value){
    function increase(){
        setCounter(counter+1);
    }
    function decrease(){
        setCounter(counter-1);
    }
    const [counter, setCounter] = useState(value);

    return [counter, increase,decrease];
}

export default useCounter;