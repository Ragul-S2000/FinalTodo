import { useState } from "react";
import TodoContext from "./components/TodoContex";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

// -------------------------------------------<>---------------------------------------------------------
const App = () => {
  let [toUpdate, settoUpdate] = useState(false);
  let [TodoName, setTodoName] = useState("");
  let [TodoDesc, setTodoDesc] = useState(""); 
  let [MyTodo, setMyTodo] = useState([]);
  let [Edit, setEdit] = useState(false);
  let [Editto, setEditto] = useState({});
  let [status, setstatus] = useState("pending")

  // -------------------------------------------<>---------------------------------------------------------
  console.log(MyTodo);
  console.log("editing",Editto);

  console.log("updated",MyTodo);
  
  

  // -------------------------------------------<>---------------------------------------------------------
  return (
    <>
      <TodoContext.Provider
        value={{
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
          status,
          setstatus,
          
        }}
      >
        <Header />
        <Input />
      
        <div className="container-fluid ">
          <div className="row ">
            <Todolist />
          </div>
        </div>
      </TodoContext.Provider>
    </>
  );
};

export default App;
