import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import IPO from './pages/IPO';
import Buyback1 from './pages/Buyback1';
import Buyback2 from './pages/Buyback2';
import UpcomingIPO from './pages/UpcomingIPO'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"; 

    function App() {
      return (
        <Router>
         <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/IPO" element={<IPO />} />
            <Route path="/Buyback1" element={<Buyback1 />} />
            <Route path="/Buyback2" element={<Buyback2 />} />
            <Route path="/UpcomingIPO" element={<UpcomingIPO />} />
          </Routes>
        </Router>
      );
    }

    export default App;