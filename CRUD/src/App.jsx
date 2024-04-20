import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  //functions of context api
  function addTodo(todo){
    
    return setTodos((prev)=>[{id:Date.now(), ...todo},...prev])

  }
  function updateTodo(){

  }
  function deleteTodo(){

  }
  function toggleComplete(){

  }

  //localstorage functionalities


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Day</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Todo items here */}
            {
              todos.map((todo) => {
                return <div className='w-full' key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              })

            }
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
