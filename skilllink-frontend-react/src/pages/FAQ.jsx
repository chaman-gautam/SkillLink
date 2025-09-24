// FAQ PAGE
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I verify my documents?",
      answer: "Upload documents in the verification section.",
    },
    {
      question: "Can I apply for multiple opportunities?",
      answer: "Yes, you can apply for unlimited opportunities.",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphism p-6 rounded-2xl">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index && (
                  <p className="mt-2 text-gray-300">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
