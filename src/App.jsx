import React from 'react';
import {  
  Route, 
  Routes, 
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './Home';
import PageNotFound from './components/pagenotfound/PageNotFound';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path ='/404' element={ <PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App