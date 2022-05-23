import React from "react";
import TaskApp from "./components/TaskApp";
import styles from"./App.css"

function App() {
  return (
    <div className={styles.main}>
      <TaskApp />
    </div>
  );
}

export default App;
