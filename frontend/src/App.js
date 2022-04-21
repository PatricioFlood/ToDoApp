import './App.css';
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Todos /> }/>
      <Route path='/edit/:id' element={ <EditTodo /> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
