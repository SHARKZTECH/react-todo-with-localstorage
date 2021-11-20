import React from "react";

import Td from "./td";
function Todo({todos,setTodos,filteredTodos}){
   
  
    return(
        <div className="todo-container">
        <ul className="todo-list">
          {
            filteredTodos.map(todo=>(
              <Td key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))
          }
          
         </ul>
      </div>
    );
}
export default Todo;