import './App.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom'

import Map from './components/Map'
import Login from './components/Login'

function App() {

  return (
    <>
     <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;