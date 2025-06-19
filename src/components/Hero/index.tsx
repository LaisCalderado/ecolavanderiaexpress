import React from 'react';
import './hero.scss';
import heroImage from '../../assets/imagens/hero.png';

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero__content">
                <p className="hero__subtitle">Sua lavanderia de auto atendimento.</p>
                <h1 className="hero__title">
                    Transformamos a tarefa de lavar roupas em um momento prático, confortável e eficiente.
                </h1>

                <p>Oferecemos roupas limpas, cheirosas e bem cuidadas, em um ambiente moderno, acessível e
                    pensado para o seu bem-estar. Conte com economia, agilidade e uma localização privilegiada
                    com estacionamento próprio para sua comodidade!
                </p>
                
                <a
                    className="hero__btn primary"
                    href="https://wa.me/553199901010"
                >
                    Entrar em contato
                </a>
                <a
                    className="hero__btn secondary"
                    href="#saibamais"
                >
                    Saiba mais
                </a>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="Lavanderia Express" />
            </div>
        </section>
    );
}
