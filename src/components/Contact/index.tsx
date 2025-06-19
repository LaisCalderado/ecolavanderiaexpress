import React from 'react';
import './contact.scss';

interface ButtonContactsProps {
    telefone?: string;
    texto?: string;
    className?: string;
    onClick?: () => void;
}
const handleClick = () => {
    // Aqui você define o que deve acontecer quando o botão for clicado
    console.log('Usuário clicou no botão de WhatsApp!');

    // Exemplo: enviar evento para analytics, abrir modal, etc.
};

export default function ButtonContacts({
    telefone = '553199901010', // telefone padrão
    texto = 'Contato',
    className = '',
    onClick
}: ButtonContactsProps) {

    const url = `https://wa.me/${telefone}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`botao-whatsapp ${className}`}
            onClick={handleClick}
        >
            <span>{texto}</span>
        </a>
    );
}
