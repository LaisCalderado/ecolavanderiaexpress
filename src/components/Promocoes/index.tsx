import React from 'react';
import './promocao.scss';
import { Tag, HandCoins, CalendarHeart, CalendarCheck } from 'lucide-react';

export default function Promocao() {
    const cards = [
        {
            titleLine1: 'Seg à Qua:',
            titleLine2: 'lava ou secar por apenas R$ 14,99',
            description: 'Aproveite dias selecionados para lavar ou secar suas peças com preço reduzido!',
            icon: <CalendarHeart size={45} color="#82A364" />
        },
        {
            titleLine1: 'Qui à Dom:',
            titleLine2: 'lava ou secar por apenas R$ 16,99',
            description: 'Mesmo nos dias de maior movimento, você ainda economiza com conforto e qualidade.',
            icon: <CalendarCheck size={45} color="#82A364" />
        }
    ];

    return (
        <section className="promocao">
            <div className="promocao__container">
                <div className="promocao__icon">
                    <Tag size={40} />
                </div>
                <div className="promocao__content">
                    <h2 className="promocao__title">Promoções Fixas</h2>
                    <div className="promocao__cards">
                        {cards.map((card, index) => (
                            <div className="promocao__card" key={index}>
                                <div className="promocao__card-icon">{card.icon}</div>
                                <h3 className="promocao__card-title">
                                    <span className="title-line1">{card.titleLine1}</span><br />
                                    <span className="title-line2">{card.titleLine2}</span>
                                </h3>
                                <p className="promocao__card-desc">{card.description}</p>
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/553199901010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="promocao__button"
                    >
                        <HandCoins size={24} style={{ marginRight: '0.75rem' }} />
                        Quero aproveitar
                    </a>
                </div>
            </div>
        </section>
    );
}
