import { Routes, Route } from 'react-router-dom';
import './App.css';
import Screen from './Screen.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Redirect from './Redirect.js';

function Connection() {
  return (
    <Routes>
        <Route path="/" element={<Screen/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />} />
        
      </Routes>
  );
}

export default Connection;

