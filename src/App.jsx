import { useState } from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
import "./App.css";
import { Counter } from './components/counter';


function App(){
  const Todos = JSON.parse(localStorage.getItem("todos")) || [];
  let[todos, setData] = useState(Todos);
  
  
  const check = (id) => {
    let checkTodo = todos.find((todo) => todo.id === id);
    checkTodo.isCompleted = !checkTodo.isCompleted;
    setData([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeUser = (index) => {
    let newData = todos.filter((user, i) => i !== index);
    setData(newData);
    localStorage.setItem("todos", JSON.stringify(newData));
  }

  return (
      <>
      <Form userData={todos} setData={setData}/>
      <Counter userData={todos}/>
      <Table userData={todos} removeUser={removeUser} check={check}/>
      {/* <h1 className="moduleStyle.color"> Salom takrorlash un kk</h1> */}
    </>
  );
}


export default App;
