import React, { useRef, useState } from 'react';

interface Props {
    question: string;
    answer: string;
}

export function AccordionItem({ question, answer }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = () => setIsOpen(prev => !prev);

    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={toggle}>
                {question}
                <span className={`arrow ${isOpen ? 'open' : ''}`}>›</span>
            </button>
            <div
                ref={contentRef}
                className="accordion-content"
                style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
}
