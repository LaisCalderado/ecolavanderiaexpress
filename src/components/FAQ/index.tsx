import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import './faq.scss';


export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="faq__title">FAQ - Perguntas Frequentes</h2>
      <p className="faq__subtitle">Tire suas dúvidas em nosso FAQ</p>
      <div className="faq__list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq__item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq__question">{item.question}</div>
            {openIndex === index && (
              <div className="faq__answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
