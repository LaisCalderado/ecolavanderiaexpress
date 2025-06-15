import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './carrossel.scss';

import img1 from '../../assets/imagens/loja1.jpeg';
import img2 from '../../assets/imagens/loja2.jpeg';
import img3 from '../../assets/imagens/loja3.jpeg';
import img4 from '../../assets/imagens/loja4.jpeg';
import img5 from '../../assets/imagens/loja5.jpeg';
import img6 from '../../assets/imagens/loja6.jpeg';

const imagens = [img1, img2, img3, img4, img5, img6];

export default function Carrossel() {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximaImagem = () => {
        setIndiceAtual((prev) => (prev + 1) % imagens.length);
    };

    const imagemAnterior = () => {
        setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    // Rolagem automática
    useEffect(() => {
        const intervalo = setInterval(() => {
            proximaImagem();
        }, 5000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="carrossel-novo">
            <div className="imagem-principal">
                <button className="seta esquerda" onClick={imagemAnterior}>‹</button>

                <div className="imagem-container">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={indiceAtual}
                            src={imagens[indiceAtual]}
                            alt={`Imagem ${indiceAtual + 1}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                </div>

                <button className="seta direita" onClick={proximaImagem}>›</button>
            </div>

            <div className="miniaturas">
                {imagens.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        onClick={() => setIndiceAtual(index)}
                        className={index === indiceAtual ? 'ativa' : ''}
                    />
                ))}
            </div>
        </div>
    );
}
