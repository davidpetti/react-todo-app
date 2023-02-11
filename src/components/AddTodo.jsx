import { useState } from "react";

export default function (props) {
  const [todoName, setTodoName] = useState("");
  const clickHandler = () => {
    if (todoName !== "") {
      props.addTodoHandler(todoName);
    }
  };

  return (
    <div>
      <input
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
      />
      <button className="addTodo" onClick={clickHandler}>
        ADD
      </button>
    </div>
  );
}
