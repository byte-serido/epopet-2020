import React from 'react';
import './App.css'
import Header from './pages/Header';
import About from './pages/About';
import Footer from './pages/Footer';
import Local from './pages/Local';
import Registration from './pages/Registration';

function App() {
    return (
        <>
            <Header />
            <About />
            <Registration />
            <Local />
            <Footer />
        </>
    );
}

export default App;
