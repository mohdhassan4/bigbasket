import React, {useState} from 'react';
 const Countup =() =>{
    const [count, setCount] = useState(0);
    const Inc = () =>{
        setCount(count + 1);
    };
    return(
        <>
        <h1>{count}</h1>
        <button onClick = {Inc}>Click me</button>
        </>
    );
}; export default Countup;
