export default function (props) {
  const clickHandler = () => {
    props.deleteHandler(props.name);
  };

  return (
    <div className="todo">
      <h2 className="todoName">{props.name}</h2>
      <button className="todoDelete" onClick={clickHandler}>
        X
      </button>
    </div>
  );
}
