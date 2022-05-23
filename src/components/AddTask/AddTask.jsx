import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {

  console.log("propffjyf",props);
  // NOTE: do not delete `data-cy` key value pair
  const [AddTodo, setAddTodo] = useState("");
  const [newTodo, setnewTodo] = useState([]);

  let handlechange = (e) => {
   // console.log(e);
    setAddTodo(e.target.value);
    //console.log("addtodo", AddTodo);
  };

  console.log("news", newTodo);

  return (
    <>
      <div className={styles.todoForm}>
        <input
          data-cy="add-task-input"
          onChange={handlechange}
          placeholder="Add a task"
          type="text"
        />
        <button
          data-cy="add-task-button"
          onClick={() => {
            setnewTodo([...newTodo, { value: AddTodo }]);
            setAddTodo("");
          }}
        >
          +
        </button>
      </div>

      <div>
        {newTodo.map((todo) => {
         <div thin={todo.value}>
           {todo.value} {" "}
         </div>


        })}
      </div>
    </>
  );
};

export default AddTask;
