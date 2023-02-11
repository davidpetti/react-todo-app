import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import styles from "./styles/styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodoHandler = (todoName) => {
    setTodoList((arr) => [...arr, todoName]);
  };

  const deleteHandler = (name) => {
    setTodoList(todoList.filter((item) => item !== name));
  };

  return (
    <div>
      <h1 className="text-align: center">Todo List</h1>
      <div>
        <AddTodo addTodoHandler={addTodoHandler} />
      </div>
      <div className="todoTable">
        {todoList.map((todo) => {
          return <Todo deleteHandler={deleteHandler} name={todo} />;
        })}
      </div>
    </div>
  );
}
