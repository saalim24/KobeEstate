import { BrowserRouter, Routes,Route } from 'react-router-dom'
import React from 'react'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Home from './Pages/home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
