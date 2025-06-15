import React, { useState } from 'react';
import './header.scss';

import logo from '../../assets/imagens/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fecha menu ao clicar num link (útil no mobile)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__main">
                <div className="header__logo">
                    <img
                        src={logo}
                        alt="Logo da Lavanderia"
                        className="header__logo-image"
                    />
                </div>

                <nav className={isMenuOpen ? 'header__nav active' : 'header__nav'}>
                    <a href="#inicio" className="nav-button" onClick={handleLinkClick}>
                        Início
                    </a>
                    <a href="#servicos" className="nav-button" onClick={handleLinkClick}>
                        Serviços
                    </a>
                    <a href="#sobre" className="nav-button" onClick={handleLinkClick}>
                        Sobre
                    </a>
                    <a href="#faq" className="nav-button" onClick={handleLinkClick}>
                        FAQ
                    </a>

                    {/* Exemplo para contato via WhatsApp */}
                    <a
                        href="https://wa.me/5599999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-button contato-btn"
                        onClick={handleLinkClick}
                    >
                        Contato
                    </a>
                </nav>

                <button
                    className={isMenuOpen ? 'hamburger open' : 'hamburger'}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
