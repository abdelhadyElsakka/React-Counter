import { useState } from "react";
import TodoForm from "../../Compnents/todo/TodoForm";
import TodoList from "../../Compnents/todo/TodoList";
import { useSelector,useDispatch } from "react-redux";
import {addTask,deleteTask} from "../../features/todo/todoSlice"
import './Todo.css';
function Todo() {
  

  const todos = useSelector(state=>state.tasks)
  const dispatch = useDispatch();

  const onAddTodo = (task) => {
    dispatch(addTask(task)); 
};

const onDeleteTodo = (index) => {
  dispatch(deleteTask(index))
}

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={onAddTodo} />
      <TodoList todos={todos} deleteTodo={onDeleteTodo} />
    </div>
  );
}

export default Todo;

