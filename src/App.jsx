import React from 'react'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import PageNotFound from './components/pagenotfound/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path="*" element={ <PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App