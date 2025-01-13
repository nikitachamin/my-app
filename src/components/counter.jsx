import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const updateCounter = () => {
        setCount(count+1);
    }
    return (

        <div>
            <h1>{count}</h1>
            <button onClick={updateCounter}>+1</button>
        </div>
     );
}

export default Counter;