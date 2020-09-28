import React from 'react';
import './App.css'
import Header from './pages/Header';
import About from './pages/About';
import Footer from './pages/Footer';
import Local from './pages/Local';
import Registration from './pages/Registration';
import Schedule from './pages/Schedule';

function App() {
    return (
        <>
            <Header />
            <About />
            <Registration />
            <Local />
            <Schedule />
            <Footer />
        </>
    );
}

export default App;
