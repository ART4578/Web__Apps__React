import { useState } from "react";
import Todo__Form from "./Components/Todo__Form/Todo__Form";
import Todo__List from "./Components/Todo__List/Todo__List";
import Todo__Footer from "./Components/Todo__Footer/Todo__Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    }
  ]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: text,
        isCompleted: false
      }
    ]);
  };

  const onClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((t)=> t.id !== todo.id));
  };

  const onChange = (newTodo) => setTodos(todos.map((todo) => {
    if (todo.id === newTodo.id) { 
      return newTodo;
    } else {
      return todo;
    }
  }));

  return (
    <div className="App">
      <header>
        <h1 className="todo__title">Todos</h1>
      </header>
      <Todo__Form onAdd={onAdd}/>
      <Todo__List
        todos={todos}
        onChange={onChange}
        onDelete={onDelete}
      />
      <Todo__Footer todos={todos} onClearCompleted={onClearCompleted}/>
    </div>
  );
};

export default App;