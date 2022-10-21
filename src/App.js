import './App.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom'

import Map from './components/Map'
import Login from './components/Login'

import Users from '../src/db/users.json'

function App() {

  return (
    <>
     <Routes>
          <Route path="/map/:id" element={<Map />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;