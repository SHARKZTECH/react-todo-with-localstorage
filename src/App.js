import './App.css';
import React,{useState ,useEffect} from 'react';
//impot components
import Form from "./components/form";
import Todo from "./components/todo";

function App() {   
   
    const [inputText,setInputText]=useState("");
    const [todos,setTodos]=useState([]);
    const [status,setStatus]=useState("all");
    const [filteredTodos,setFilteredTodos]=useState([]);

    useEffect(()=>{
      getLocalTodos();
    },[])

    useEffect(()=>{
      filterHandler();
      saveLocalTodo();
    },[todos,status]);


    const filterHandler=()=>{
      switch(status){
        case  "completed" :
          setFilteredTodos(todos.filter(todo=>todo.completed === true));
          break;
        case  "uncompleted" :
          setFilteredTodos(todos.filter(todo=>todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    }

    const saveLocalTodo=()=>{        
        localStorage.setItem("todos",JSON.stringify(todos));
    };


    const getLocalTodos=()=>{
      if(localStorage.getItem("todos")===null){
        localStorage.setItem("todos", JSON.stringify([]));
      }else{
        const localTodo=localStorage.getItem("todos",JSON.stringify(todos));
        const locals=JSON.parse(localTodo)
        setTodos(locals);
        setFilteredTodos(locals);

      }

    };

  return (
    <div className="App">
      <header >SharkzTech TodoList </header>
      <Form setStatus={setStatus} todos={todos}  setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
      <Todo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
