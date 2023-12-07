import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from 'Pages/home/Home';
import Login from 'Pages/login/Login';
import Profile from 'Pages/profile/Profile';


const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile/:userId' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App