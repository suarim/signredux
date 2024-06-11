import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createtodo, deletetodo, fetchtodo } from "../reducers/Tododreducer";
import '../App.css'
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handlebtxn = () => {
    dispatch(createtodo({ todo }));
  };
  const handlexit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const del = (id)=>{
    console.log(id)
      dispatch(deletetodo(id))
  }
  useEffect(() => {
    dispatch(fetchtodo());
  }, [dispatch]);
  return (
    <div className="container">
    <div className="main">
      <input
        className="todoinp"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={handlebtxn} className="btn">ADD</button>
      <button onClick={handlexit} className="btn">Logout</button>
      <hr></hr>
      <ul>
        {todos.map((item) => {
          return (
            <li key={item._id} onClick={()=>del(item._id)}>
              {item.todo}
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default Todo;
