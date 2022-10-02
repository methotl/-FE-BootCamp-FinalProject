import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import OrderList from './components/OrderList';
import ReviewList from './components/ReviewList';
import Error from './components/Error';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  
  
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/orders' element={<OrderList/>}/>
          <Route path='/reviews' element={<ReviewList/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;