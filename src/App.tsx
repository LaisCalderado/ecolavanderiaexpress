import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Conheca from './components/Conheca';
import Services from './components/Services';
import Contact from './components/Contact';
import Local from './components/Local';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Conheca/>
            <Local />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
