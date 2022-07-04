
const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className=" d-flex text-left">
            <div className="text me-auto ">
              <p>{todo.title}</p>
              <p>{todo.content}</p>
            </div>
            <div>
              <a onClick={()=>deleteTodo(i)}><h1>X</h1></a> 
            </div>
            </li>
            <hr></hr>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
