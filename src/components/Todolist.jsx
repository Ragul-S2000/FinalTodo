import  { useContext } from 'react'
import  TodoContext  from '../components/TodoContex'

const Todolist = () => {
  let {
    MyTodo,
    setMyTodo,
    Edit,
    setEdit,
    Editto,
    setEditto,
    TodoName,
    setTodoName,
    TodoDesc,
      setTodoDesc,
    status,
    setstatus
  } = useContext(TodoContext);

  // -------------------------------------------------------<>---------------------------------------------------------------------------
  function handlestatus(id, e) {
    const updatedTodos = MyTodo.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: e.target.value };
      }
      return todo;
    });
    setMyTodo(updatedTodos);
    console.log("->",MyTodo);
    
  }

  // -------------------------------------------------------<>---------------------------------------------------------------------------
  function handleEdit(id) {
    setEdit(true);
    let todo = MyTodo.filter((todo) => todo.id === id);
    if (todo) {
      setEditto(todo);
      setTodoName(todo[0].TodoName);
      setTodoDesc(todo[0].TodoDesc);
      console.log("edited", Editto);
    }
  }
    // -------------------------------------------------------<>---------------------------------------------------------------------------
    function handleDelete(id) {
    let newtodo = MyTodo.filter((todo) => todo.id !== id);
    setMyTodo(newtodo);
  }
  // -------------------------------------------------------<>---------------------------------------------------------------------------

  return (
    <>
      <div className="row border border-black col-12 mt-5  justify-content-center">
        {MyTodo.map((todo) => (
          <div key={todo.id} className="card col-4">
            <p className="card-Name">Name:{todo.TodoName}</p>
                <p className="card-Desc">Description:{todo.TodoDesc}</p>
                <div>
                    <span>status:</span>
                    <select className='btn btn-secondary' value={todo.status}  onChange={(e)=>handlestatus(todo.id,e)}>
                        <option value="pending">pending</option>
                        <option value="completed">completed</option>
                        <option value="inprogress">inprogress</option>
                    </select>
                </div>
            <div className="row">
              <button
                onClick={() => handleEdit(todo.id)}
                className="btn btn-primary col-4 ms-5"
              >
                Edit
              </button>
              <button onClick={()=>handleDelete(todo.id)} className="btn btn-danger  col-4 ms-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist