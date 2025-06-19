import React from 'react';
import './services.scss';
import { Shirt, Wind, Star, Store, CheckCircle, Droplet  } from 'lucide-react';

export default function Services() {
    return (
        <section className="services" id="servicos">
            <h2 className="services__title">Nossos Serviços</h2>
            <p>Venha nos fazer uma visita e descubra por que somos a Melhor Lavanderia - onde a excelência se encontra com a comodidade!</p>
            <div className="services__grid">
                <div className="service-card">
                    <Shirt size={48} /> {/* verde */}
                    <h3>Lavagem de Roupas</h3>
                    <p>Lavagem com sabão biodegradável e cuidado profissional em apenas 39min.</p>
                </div>
                <div className="service-card">
                    <Wind size={48} /> {/* azul */}
                    <h3>Secagem Rápida</h3>
                    <p>Secagem com tecnologia que preserva tecidos e reduz odores em apenas 45min .</p>
                </div>
                <div className="service-card">
                    <Droplet  size={48}  />
                    <h3>Passadoria</h3>
                    <p>Passadoria a vapor para deixar suas roupas impecáveis.</p>
                </div>
                <div className="service-card">
                    <Star size={48} />
                    <h3>Produtos de primeira linha</h3>
                    <p>Utilizamos apenas produtos de alta qualidade como Omo e confort concentrado.</p>
                </div>
                <div className="service-card">
                    <Store size={48} />
                    <h3>Comercial</h3>
                    <p>Atendimento especializado para clínicas, empresas, hotéis, hostels e salões.</p>
                </div>
                <div className="service-card">
                    <CheckCircle size={48}/>
                    <h3>Higienização correta</h3>
                    <p>Processos seguros para garantir roupas realmente limpas e desinfectadas.</p>
                </div>
            </div>
        </section>
    );
}
