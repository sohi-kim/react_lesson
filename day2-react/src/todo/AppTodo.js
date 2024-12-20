import { useCallback, useState } from 'react';
import './App.css';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoTemplate from './component/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리액트 기초',
      checked: true
    },
    {
      id:2,
      text: '리액트 스타일링',
      checked: true
    },
    {
      id:3,
      text: '리액트 훅',
      checked: false
    }
  ])

  // const nextId = useRef(4)
 const handleToggle = (id)=>{
    setTodos(
      todos.map( todo => todo.id===id ? {...todo, checked: !todo.checked} : todo)
    )
 }


  const handleInsert = useCallback(text => {
    const todo = {
      id: todos.length + 1,
      text,
      checked: false
    }

    setTodos(todos.concat(todo))
  }, [todos])

  const handleRemove = useCallback(id =>{
    setTodos(todos.filter (todo => todo.id !== id))
  },[todos])

  return (
    <TodoTemplate>
       <TodoInsert onInsert={handleInsert} />
       <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
    </TodoTemplate>  
  );
}

export default App;
