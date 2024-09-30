import React,{useContext } from 'react'
import  TodoContext  from '../components/TodoContex'
//----------------------------------------------<>----------------------------------------------------------------- 
const Input = () => {
  let {
    toUpdate,
    settoUpdate,
    TodoName,
    setTodoName,
    TodoDesc,
    setTodoDesc,
    MyTodo,
    setMyTodo,
    Edit,
      setEdit,
      Editto,
      setEditto,
    status,setstatus
  } = useContext(TodoContext);
  //----------------------------------------------<>-----------------------------------------------------------------
  const handleAdd = (e) => {
    e.preventDefault();
    let Todos = {
      id: MyTodo.length+1,
      TodoName,
        TodoDesc,
      status:status
    };
    setMyTodo([...MyTodo, Todos]);
    setTodoName("");
    setTodoDesc("");
    console.log("Added Successfully");
  };
  //----------------------------------------------<>-----------------------------------------------------------------
   const handleUpdate = () => {
    let newtodo= MyTodo.map((todo) => {
        if (todo.id === Editto[0].id) {
            return { ...todo, TodoName, TodoDesc,status };
            
      }
        return todo;
        
    });
       setMyTodo(newtodo);
       setTodoName("");
       setTodoDesc("");
       setEdit(false);

  };
  //----------------------------------------------<>-----------------------------------------------------------------

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form id="form">
              <div className="form-group ">
                <input
                  className=" col-4 me-2 pb-2"
                  placeholder="TodoName"
                  type="text"
                  value={TodoName}
                  onChange={(e) => setTodoName(e.target.value)}
                />
                <input
                  className=" col-4 me-2 pb-2"
                  placeholder="TodoDescription"
                  type="text"
                  value={TodoDesc}
                  onChange={(e) => setTodoDesc(e.target.value)}
                />
                {Edit === false ? (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleAdd}
                  >
                    AddTodo
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleUpdate}
                  >
                    {" "}
                    update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input