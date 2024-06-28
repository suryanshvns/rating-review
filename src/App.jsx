import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // or the appropriate path to your CSS file
import Feedback from './pages/Feedback';
import Rating from './pages/Rating';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Rating />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
        </Router>
    );
};

export default App;
