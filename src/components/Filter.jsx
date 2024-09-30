import { useContext, useState, useEffect } from "react";
import TodoContext from "../components/TodoContex";

const Filter = () => {
    const { MyTodo ,setMyTodo,settofilter,setfilteredTodos,filteredTodos,filter, setFilter } = useContext(TodoContext);
   

    
   
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-2 mb-5 py-0 d-flex flex-row position-absolute end-0">
                        <div className="mt-3 mb-5 py-0 d-flex flex-row position-absolute end-0 me-5">
                            <p>FILTER By STATUS:</p>
                            <select className="py-0 mb-5" value={filter} onChange={(e)=>setFilter(e.target.value)}>
                                <option value="All">All</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                                <option value="inprogress">In Progress</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Filter;
