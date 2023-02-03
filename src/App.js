import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Navbar from './Pages/Components/Navbar';
import Courses from './Pages/Courses/Coures';
import History from './Pages/History/History';

const App = () => {
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/courses" element={<Courses/>} />
                <Route path="/history" element={<History/>} />
            </Routes>
        </>
    );
}

export default App;
