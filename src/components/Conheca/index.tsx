// src/components/Conheca/Conheca.tsx
import React from 'react';
import './conheca.scss';
import Carrossel from '../Carrossel';

import { Shirt, Leaf, Wifi, Sparkles, SprayCan, CircleParking, Snowflake, Video } from 'lucide-react';

export default function Conheca() {
    return (
        <section className="conheca">
            <div className="conheca__content">
                <div className="conheca__left">
                    <Carrossel />
                </div>
                <div className="conheca__right">
                    <h2>Conheça Nosso Espaço</h2>
                    <h1>Nosso Compromisso com a Excelência!</h1>
                    <p>
                        Aqui na nossa lavanderia você encontra um ambiente limpo, moderno e acolhedor.
                        Utilizamos equipamentos de última geração para garantir a melhor lavagem para suas roupas.
                        Na Eco Express Lavanderia, suas roupas saem limpas, macias e perfumadas em poucos minutos, 
                        com a rapidez e qualidade que você merece. Nosso espaço foi pensado para oferecer conforto e acolhimento: 
                        enquanto espera, aproveite um ambiente agradável. 
                        Aqui, cuidar das suas roupas é também uma experiência prazerosa. 
                        Venha nos visitar e sinta a diferença Eco Express!
                    </p>

                    <ul className="conheca__icons-list">
                        <li>
                            <Shirt className="icon" />
                            Lavagem profissional
                        </li>
                        <li>
                            <Leaf className="icon" />
                            Produtos ecológicos
                        </li>
                        <li>
                            <Wifi className="icon" />
                            Wi-fi Gratuito
                        </li>
                        <li>
                            <Sparkles className="icon" />
                            Limpeza impecável
                        </li>
                        <li>
                            <SprayCan className="icon" />
                            Cheirinho reserva para as roupas
                        </li>
                        <li>
                            <CircleParking className="icon" />
                            Estacionamento
                        </li>
                        <li>
                            <Snowflake className="icon" />
                            Ar condicionado
                        </li>
                        <li>
                            <Video className="icon" />
                            Câmera de segurança
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
