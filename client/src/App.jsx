import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashDetail from './components/Hash/HashDetail';
import Ipdetail from './components/ip/Ipdetail';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<HashDetail />} path="/correspondinghash" />
           <Route element={<Ipdetail/>} path="/ip-reputation" />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App