import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChatApp from './components/pages/ChatApp.jsx';
import Login from './components/pages/Login.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatApp/>}/>;
        <Route path='/login' element={<Login/>}/>;
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
