import { useEffect, useState } from 'react'
import { getFolder, getTodos, updateTodo, createTodo, removeTodo } from '../utils/api'
import { NavLink, useParams } from 'react-router-dom'

const Todos = () => {
  const { id } = useParams()
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const [folderName, setFolderName] = useState("")
  useEffect(() => {
    if(id)
      getFolder(id).then(res => {
        setTodos(res.todos)
        setFolderName(res.name)
      })
    else
      getTodos().then(res => setTodos(res))
  }, [id])

  const handleCheckTodo = (event, id) => {
    console.log(event)
    updateTodo(id, {
      check: event.target.checked?"true":"false"
    })
  }

  const handleChangeInput = e => {
    setNewTodo(e.target.value)
  }

  const handleAddTodo = () => {
    if(newTodo){
      setNewTodo("")
      createTodo({name: newTodo, folderId: id || null})
        .then(res => setTodos([...todos, res]))
    }
  }

  const handleRemoveTodo = (todo) => () => {
    if(window.confirm(`Are you sure you want to remove ${todo.name}`)){
      const todosCopy = [...todos]
      const index = todosCopy
        .findIndex((t) => t.id === todo.id)
      if (index !== -1)
        removeTodo(todo.id)
          .then(() => {
            todosCopy.splice(index, 1)
            console.log(todosCopy)
            setTodos(todosCopy);
          })
    }
  }

  return (
    <div className="w-full md:w-[768px] mx-auto">
      <h1 className="bg-amber-300 text-black text-center font-bold text-xl py-10">
        <NavLink to="/">Folders</NavLink> {`> ${folderName || 'All Items'}`}
      </h1>
      <div>
        <ul className="w-full px-10 bg-amber-100 py-4 pb-5">
          {todos.map(todo => (
            <li key={todo.id} className="flex w-full justify-between mt-1 pt-1 border-t-2 border-amber-200">
              <div>
                <input type="checkbox" defaultChecked={todo.check} onChange={e => handleCheckTodo(e, todo.id)}/> 
                <span className="ml-2">{todo.name}</span>
              </div>
              <div>
                <NavLink to={`/edit/${todo.id}`} className="ml-2">Edit</NavLink>
                <button className="ml-2" onClick={handleRemoveTodo(todo)}>Remove</button>
              </div>
            </li>
          ))}
          <div className="w-full mt-1 border-t-2 border-amber-200"></div>
        </ul>
      </div>
      <div className="flex items-center justify-between w-full px-10 bg-amber-100 py-4 pb-5">
        New Task: 
        <input className="flex-grow mx-5 p-2 rounded-lg" value={newTodo} onChange={handleChangeInput}></input> 
        <button className="bg-amber-200 p-2 rounded-lg hover:bg-amber-300" onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default Todos;
