import React, {useState} from "react";
import 'C:/Users/asdf/Front-project/toyproject_react/src/style/02. Counter.css';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div id="counter">
            <h1 id="title">Counter</h1>
            <div id="num" style={{color: count < 0 ? 'blue' : count > 0 ? 'red' : 'black'}}>{count}</div>
            <div id="buttonList">
                <button id="dec" onClick={()=>{
                    setCount(count - 1);
                }}>D E C R E A S E</button>
                <button id="res" onClick={()=>{
                    setCount(0);
                }}>R E S E T</button>
                <button id="inc" onClick={()=>{
                    setCount(count + 1);
                }}>I N C R E A S E</button>
            </div>
        </div>
    );
}

export default Counter;