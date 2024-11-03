import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';
import FacultyLogin from './pages/FacultyLogin';
import StudentLogin from './pages/StudentLogin';
import Student from './pages/Student'
import Faculty  from './pages/Faculty'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}>Home</Route> */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path='/student' element={<Student />}>Student</Route>
          <Route path='/faculty' element={<Faculty />}>Faculty</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
