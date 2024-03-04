import { useState } from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    function increment(){
        setCount(count +1);
    }
    function decrement(){
        setCount(count -1);
    }
    function increase(){
        setCount(count +10)
    }
    function decrease(){
        setCount(count -10);
    }
    function Triple(){
        setCount(count *3);
    }

    return (
        <div>
            <h1>Count value is:{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={increase}>+10</button>
            <button onClick={decrement}>-1</button>
            <button onClick={decrease}>-10</button>
            <button onClick={Triple}>Triple</button>
        </div>
    );
}