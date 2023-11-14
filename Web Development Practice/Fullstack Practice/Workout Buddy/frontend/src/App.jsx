// imports
import React from 'react';
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/pages/home';
import NavBar from './components/NavBar';
import index from "./static/css/index.css"

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
