import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Auther from './Pages/Auther'
import Submission from './Pages/Submission'
import Registration from './Pages/Registration'
import Venue from './Pages/Venue'
import Schedule from './Pages/Schedule'
import Commitee from './Pages/Commitee'

function App() {

  return (
    <div className='w-screen'>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auther" element={<Auther />} />
        <Route path="/submit" element={<Submission />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/commitee" element={<Commitee />} />

      </Routes>
    </div>
    
  )
}

export default App
