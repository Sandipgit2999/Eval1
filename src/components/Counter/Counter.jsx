import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count,setCount]=useState(1);
  // sample value to be replaced
  let increment=()=>{
    let count1=count+1;
    console.log(count1)
    setCount(count1);
  }

  let decrement=()=>{
    let count2=count-1;
    console.log(count2)
    setCount(count2);
  }
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={increment}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
