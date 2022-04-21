import axios from 'axios'

const baseUrl = '/api'

const getTodos =  async () => {
    const res = await axios.get(`${baseUrl}/todos`)
    return res.data
}

const createTodo = async (todo) => {
    const res = await axios.post(`${baseUrl}/todos`, todo)
    return res.data
}

const getTodo =  async (id) => {
    const res = await axios.get(`${baseUrl}/todos/${id}`)
    return res.data
}

const updateTodo =  async (id, todo) =>  {
    const res = await axios.put(`${baseUrl}/todos/${id}`, todo)
    return res.data
}
const removeTodo =  async (id) => {
    const res = await axios.delete(`${baseUrl}/todos/${id}`)
    return res.data
}

const getFolders =  async () => {
    const res = await axios.get(`${baseUrl}/folders`)
    return res.data
}

const createFolder = async (todo) => {
    const res = await axios.post(`${baseUrl}/folders`, todo)
    return res.data
}

const getFolder =  async (id) => {
    const res = await axios.get(`${baseUrl}/folders/${id}`)
    return res.data
}

const removeFolder =  async (id) => {
    const res = await axios.delete(`${baseUrl}/folders/${id}`)
    return res.data
}

export { 
    getTodos, createTodo, getTodo, updateTodo, removeTodo,
    getFolders, createFolder, getFolder, removeFolder
}