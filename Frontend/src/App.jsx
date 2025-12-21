import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';
import ReservationList from './Pages/ReservationList';


import './App.css';

const App=()=>{
    console.log("App component loaded");
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/success" element={<Success />}/>
                <Route path="*" element={<NotFound />}/> 
                <Route path="/reservations" element={<ReservationList />}/>
            </Routes>
            <Toaster / >
        </Router>
    );
}


export default App;