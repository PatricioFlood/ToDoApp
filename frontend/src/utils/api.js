import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

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

export { getTodos, createTodo, getTodo, updateTodo, removeTodo }