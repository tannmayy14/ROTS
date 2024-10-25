import './App.css';
import LandingPage from './components/LandingPage';
import 'typeface-lato';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bikes from './components/Bikes';
import Footer from './components/footer';
import Signup from './authPages/SignUp';
import SignIn from './authPages/SignIn';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router> 
      </div>
  );
}

export default App;


