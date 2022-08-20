import React from "react";
import ToDoItem from "./ToDoItem";

export default function todos(props) {
  let mystyle = {
    minHeight: "50vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={mystyle}>
      <h3>To-Do list</h3>

      {props.todos.length === 0
        ? "Nothing To-Do :)"
        : props.todos.map((todo) => {
            return (
              <>
                {" "}
                <ToDoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              </>
            );
          })}
    </div>
  );
}
