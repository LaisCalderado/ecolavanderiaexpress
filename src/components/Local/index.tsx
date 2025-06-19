import React from 'react';
import { Instagram, MapPin, Phone, MessageSquare } from 'lucide-react';
import './local.scss';

export default function Local() {
    return (
        <section className="localizacao">
            <div className="localizacao__content">

                <h2>Onde nos encontrar</h2>

                <div className="service-cards">
                    <div className="service-item">
                        <div className="icon-button">
                            <Phone size={48} className="icon" />
                        </div>
                        <h3
                            onClick={() => window.open('https://wa.me/5531999901010', '_blank')}
                            className="clickable"
                        >
                            Telefone
                        </h3>
                        <p>(31) 99990-1010</p>
                    </div>

                    <div className="service-item">
                        <div className="icon-button">
                            <MessageSquare size={48} className="icon" />
                        </div>
                        <h3
                            onClick={() => window.open('https://wa.me/5531999901010', '_blank')}
                            className="clickable"
                        >
                            WhatsApp
                        </h3>
                        <p>(31) 99990-1010</p>
                    </div>

                    <div className="service-item">
                        <div className="icon-button">
                            <Instagram size={48} className="icon" />
                        </div>
                        <h3
                            onClick={() => window.open('https://instagram.com/eco.lavanderiaexpress', '_blank')}
                            className="clickable"
                        >
                            Instagram
                        </h3>
                        <p>@eco.lavanderiaexpress</p>
                    </div>
                </div>

                <div className="localizacao__map-wrapper">
                    <div className="localizacao__map">
                        <iframe
                            title="Mapa da localização"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.068069906775!2d-43.93636168502165!3d-19.927138086738616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69971cbca16d8%3A0x6ff16a8f24fa75d7!2sAv.%20%C3%81lvares%20Cabral%2C%201200%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030170-004!5e0!3m2!1spt-BR!2sbr!4v1686878152041!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <h1 className='localizacao_map-endereco'>Endereço</h1>
                    <p className="localizacao__map-legenda">
                        Av. Álvares Cabral, 1.200 - Belo Horizonte, MG, 30170-004
                    </p>
                </div>
            </div>
        </section>
    );
}
