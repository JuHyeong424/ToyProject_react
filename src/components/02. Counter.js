import React, {useState} from "react";
import styles from '../style/02. Counter.module.css';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className={styles.counter}>
            <h1 className = {styles.title}>Counter</h1>
            <div className={styles.num} style={{color: count < 0 ? 'blue' : count > 0 ? 'red' : 'black'}}>{count}</div>
            <div className={styles.buttonList}>
                <button className={styles.dec} onClick={()=>{
                    setCount(count - 1);
                }}> D E C R E A S E </button>
                <button className={styles.res} onClick={()=>{
                    setCount(0);
                }}> R E S E T </button>
                <button className={styles.inc} onClick={()=>{
                    setCount(count + 1);
                }}> I N C R E A S E </button>
            </div>
        </div>
    );
}

export default Counter;