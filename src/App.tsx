import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Conheca from './components/Conheca';
import Services from './components/Services';
import Promocao from './components/Promocoes';
import Local from './components/Local';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Promocao/>
            <Conheca/>
            <Local />
            <Reviews/>
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
