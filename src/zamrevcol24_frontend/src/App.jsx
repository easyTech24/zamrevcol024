import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Home from './components/Pages/Home';
import Payments from './components/Pages/Payments';
import Reports from './components/Pages/Reports';
import Market_allocation from './components/Pages/Market-allocation';
import Accounts from './components/Pages/Accounts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
    
        <Route path='/transactions' element={<Payments />} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/market-allocation' element={<Market_allocation />} />
        <Route path='/accounts' element={<Accounts />} />
      </Routes>
    </Router>
  );
}

export default App;
