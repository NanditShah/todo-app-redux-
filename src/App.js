import { React } from "react";
import { Input } from "./Components/Input";
import './App.css'
import { useSelector } from 'react-redux'
import {selectTodoList} from './feature/todoSlice'
import TodoItem from "./Components/TodoItem";


function App() {
  
  const todoList = useSelector(selectTodoList)
  return (
    <div className='app'>
    <h1>To-do App</h1>
    <div className="app_container">
      <div className='app_todos_container'>
      {
        todoList.map(todo => (
        <TodoItem name={todo.item} id={todo.id} done={todo.done}/>
        ))}
      </div>
    <Input />
    </div>
    </div>
    
  );
}

export default App;
