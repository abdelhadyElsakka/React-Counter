import { useState } from "react";
import TodoForm from "../../Compnents/todo/TodoForm";
import TodoList from "../../Compnents/todo/TodoList";
import { useSelector,useDispatch } from "react-redux";
import {addTask,deleteTask} from "../../redux"
import './Todo.css';
function Todo() {
  

  const todos = useSelector(state=>state.tasks)
  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addTask(task))
  };

  const deleteTodo = (index) => {
    console.log(index)
    dispatch(deleteTask(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;

