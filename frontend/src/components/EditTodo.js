import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getTodo, updateTodo } from '../utils/api'

const EditTodo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [name, setName] = useState('')

  useEffect(() => {
    getTodo(id).then(res => {
      setName(res.name)
    })
  }, [id])

  const handleChangeInput = e => {
    setName(e.target.value)
  }

  const handleUpdate = () => {
    updateTodo(id, {name})
      .then(res => navigate('/'))
  }

  return (
    <div className="w-full md:w-[768px] mx-auto">
      <h1 className="bg-amber-300 text-black text-center font-bold text-xl py-10">
        Edit To-Do
      </h1>
      <div className="w-full px-10 bg-amber-100 py-4 pb-5">
        <input className="flex-grow w-full p-2 rounded-lg text-center" value={name} onChange={handleChangeInput}></input> 
        <div className="flex justify-center mt-2">
          <button className="bg-amber-200 p-2 rounded-lg hover:bg-amber-300" onClick={handleUpdate}>Save</button>
          <button className="bg-amber-200 p-2 ml-2 rounded-lg hover:bg-amber-300" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditTodo