import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserList from './components/UserList.jsx'
import AddUser from './components/AddUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='add' element={<AddUser />} />
        <Route path='update/:id' element={<UpdateUser />} />
      </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
