import './App.css';
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
import Folders from './components/Folders'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Folders /> }/>
      <Route path='/folders/:id' element={ <Todos /> }/>
      <Route path='/edit/:id' element={ <EditTodo /> }/>
      <Route path='/items' element={ <Todos /> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
