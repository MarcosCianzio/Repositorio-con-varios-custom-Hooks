import { usecounter, useState } from "react"

export const useCounter = ( initialstate = 10 ) => {


    const [counter, setCounter] = useState(initialstate);

    const increment = () => {
        setCounter ( counter + 1);
    }
    const decrement = () => {
        setCounter (counter - 1);
    }
    const reset = () => {
        setCounter(initialstate);
    }

    return {
        
    }


}