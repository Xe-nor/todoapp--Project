/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Todos from "./components/todos";
import React, { useState,useEffect } from "react";
import { AddTodo } from "./components/addtodo";
import { BrowserRouter } from "react-router-dom";

function App() {
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e)=> {
    return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
    <BrowserRouter>
      <Header searchBar={false} />

      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />

      <Footer/>
      </BrowserRouter>
  </>
  );
}

export default App;
