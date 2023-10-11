    
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom'

const Tabs = () => {
    return (
        <div> 
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </div>
    )
}
export default Tabs;