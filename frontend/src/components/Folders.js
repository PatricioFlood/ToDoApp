import { useEffect, useState } from 'react'
import { getFolders, createFolder, removeFolder } from '../utils/api'
import { NavLink } from 'react-router-dom'

const Folders = () => {
  const [folders, setFolders] = useState([])
  const [newFolder, setNewFolder] = useState("")

  useEffect(() => {
    getFolders().then(res => setFolders(res))
  }, [])

  const handleChangeInput = e => {
    setNewFolder(e.target.value)
  }

  const handleAddFolder = () => {
    if(newFolder){
      setNewFolder("")
      createFolder({name: newFolder})
        .then(res => setFolders([...folders, res]))
    }
  }

  const handleRemoveFolder = (folder) => () => {
    if(window.confirm(`Are you sure you want to remove ${folder.name}`)){
      const foldersCopy = [...folders]
      const index = foldersCopy
        .findIndex((f) => f.id === folder.id)
      if (index !== -1)
        removeFolder(folder.id)
          .then(() => {
            foldersCopy.splice(index, 1)
            console.log(foldersCopy)
            setFolders(foldersCopy);
          })
    }
  }

  return (
    <div className="w-full md:w-[768px] mx-auto">
      <h1 className="bg-amber-300 text-black text-center font-bold text-xl py-10">
        Folders
      </h1>
      <div>
        <ul className="w-full px-10 bg-amber-100 py-4 pb-5">
          {folders.map(folder => (
            <li key={folder.id} className="flex w-full justify-between mt-1 pt-1 border-t-2 border-amber-200">
              {folder.name}
              <div>
                <NavLink to={`/folders/${folder.id}`} className="ml-2">View Items</NavLink>
                <button className="ml-2" onClick={handleRemoveFolder(folder)}>Remove</button>
              </div>
            </li>
          ))}
            <li className="flex w-full justify-between mt-1 pt-1 border-t-2 border-amber-200">
              All Items
              <div>
                <NavLink to={`/items`} className="ml-2">View Items</NavLink>
              </div>
            </li>
          <div className="w-full mt-1 border-t-2 border-amber-200"></div>
        </ul>
      </div>
      <div className="flex items-center justify-between w-full px-10 bg-amber-100 py-4 pb-5">
        New Folder: 
        <input className="flex-grow mx-5 p-2 rounded-lg" value={newFolder} onChange={handleChangeInput}></input> 
        <button className="bg-amber-200 p-2 rounded-lg hover:bg-amber-300" onClick={handleAddFolder}>Add</button>
      </div>
    </div>
  );
}

export default Folders;
