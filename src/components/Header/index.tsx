import React, { useState, useRef, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/imagens/logo.png';
import ButtonContacts from '../Contact';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);

    // Fecha menu ao clicar num link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
        console.log('Clicou no link');
    };

    // Fecha o menu ao clicar fora ou ao rolar
    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsMenuOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

                <nav
                    ref={navRef}
                    className={isMenuOpen ? 'header__nav active' : 'header__nav'}
                >
                    <a href="#inicio" className="nav-button" onClick={handleLinkClick}>
                        Início
                    </a>
                    <a href="#servicos" className="nav-button" onClick={handleLinkClick}>
                        Serviços
                    </a>
                    <a href="#sobre" className="nav-button" onClick={handleLinkClick}>
                        Sobre
                    </a>
                    <a href="#reviews" className="nav-button" onClick={handleLinkClick}>
                        Avaliações
                    </a>
                    <a href="#faq" className="nav-button" onClick={handleLinkClick}>
                        FAQ
                    </a>
                    <ButtonContacts
                        texto="Contato"
                        className="nav-button contato-btn"
                        telefone="553199901010"
                        onClick={handleLinkClick}
                    />

                </nav>

                <button
                    ref={hamburgerRef}
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
