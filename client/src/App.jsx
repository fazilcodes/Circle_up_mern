import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Profile from './Pages/profile/Profile';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { ThemeProvider } from '@emotion/react';


const App = () => {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile/:userId' element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App