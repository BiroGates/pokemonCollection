import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/index';

export default function Path() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
