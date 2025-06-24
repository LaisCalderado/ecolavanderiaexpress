import React from "react";
import { Instagram, Phone, Facebook, MessageSquare, MapPin } from "lucide-react";
import "./footer.scss";
import logo from "../../assets/imagens/logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__columns">
                    <div className="footer__branding">
                        <img src={logo} alt="Logo Eco Lavanderia Express" className="footer__logo" />

                        <div className="footer__contacts">
                            <a href="tel:+5531999901010" aria-label="Ligar"><Phone size={22} /></a>
                            <a href="https://wa.me/5531999901010" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <MessageSquare size={22} />
                            </a>
                            <a href="https://instagram.com/eco.lavanderiaexpress" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={22} />
                            </a>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h4>Nosso site</h4>
                        <a href="#inicio">Início</a>
                        <a href="#reviews">Depoimentos</a>
                        <a href="#promocoes">Benefícios</a>
                    </div>

                    <div className="footer__column">
                        <h4>Saiba mais</h4>
                        <a href="#sobre">Sobre</a>
                        <a href="#servicos">Etapas</a>
                        <a href="#faq">FAQ</a>
                    </div>

                    <div className="footer__column">
                        <h4>Pagamento</h4>
                        <span>Débito</span>
                        <span>Crédito</span>
                        <span>PIX</span>
                    </div>

                    <div className="footer__column">
                        <h4>Endereço</h4>
                        <p className="footer__address">
                            <MapPin size={80} style={{ marginRight: '6px', color: '#3BC365' }} />
                            Av. Álvares Cabral, 1200 - Lourdes, Belo Horizonte - MG, 30170-004
                        </p>
                    </div>

                </div>

            </div>

            <div className="footer__bottom">
                <p>© {new Date().getFullYear()} Eco Lavanderia Express.</p>
            </div>
        </footer>
    );
}