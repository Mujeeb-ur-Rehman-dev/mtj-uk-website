import React, { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "Where does my donation go?",
      answer: "Your donation supports MTJ Foundation's Food Relief Program in Pakistan, providing monthly food packages to vulnerable families."
    },
    {
      question: "What's included in a food package?",
      answer: "Each food package includes essential items like rice, flour, lentils, cooking oil, sugar, tea, and other basic necessities to sustain a family for a month."
    },
    {
      question: "Is my donation eligible for Zakat?",
      answer: "Yes, all our food relief donations are fully eligible for Zakat. We ensure 100% of your Zakat reaches the deserving families."
    },
    {
      question: "How often are families supported?",
      answer: "Families are supported on a monthly basis, with regular distributions to ensure consistent food security for those in need."
    },
    {
      question: "Why is food aid urgently needed right now?",
      answer: "Many families in Pakistan are facing severe food insecurity due to economic challenges, inflation, and natural disasters, making immediate support critical."
    },
    {
      question: "Can I donate on behalf of someone else?",
      answer: "Absolutely! You can make a donation in someone's name, and we can send a personalized acknowledgment upon request."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-accordion">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
