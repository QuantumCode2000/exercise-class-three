import { useState } from "react";

const Counter = ({initial = 0}) => {
    const [counter, setCounter] = useState(initial)
    
    
    const handleCounter = () => {
        setCounter(
            (prev) => {
                return prev + 1
            }
        )
    }
    const handleSubtractCounter = () => {
        setCounter(
            (prev) => {
                if (prev === 0) {
                    return prev
                }
                return prev - 1
            }
        )
    }
        
            
        
    
    
    return(
        <div>
            <span  >
                Contador = {counter}
            </span>
            <div>
                <button onClick = {handleCounter}>+</button>
            </div>
            <div><button onClick = {handleSubtractCounter}>-</button></div>
        </div>
    );

}
export default Counter