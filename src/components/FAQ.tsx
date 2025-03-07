
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-lg overflow-hidden mb-4">
      <button
        className="flex justify-between items-center w-full p-5 text-left transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="text-neon-cyan" size={18} />
          ) : (
            <Plus className="text-neon-cyan" size={18} />
          )}
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-5 pt-0 text-gray-300">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is CUSTOM GPT MAKER BOT?",
      answer: (
        <p>
          CUSTOM GPT MAKER BOT is an advanced AI designed to transform into any specific type of GPT you envision. It creates tailored instructions based on your requirements and follows those instructions to become your perfect custom assistant.
        </p>
      ),
    },
    {
      question: "How is this different from regular ChatGPT?",
      answer: (
        <p>
          Unlike standard ChatGPT, CUSTOM GPT MAKER BOT can adapt its entire operating system to become a specialized assistant with specific personality traits, knowledge bases, and capabilities that are tailored exactly to your needs. It creates complete operating instructions for itself based on your specifications.
        </p>
      ),
    },
    {
      question: "What types of custom GPTs can I create?",
      answer: (
        <p>
          You can create virtually any type of specialized GPT, including but not limited to: creative writing assistants, technical documentation experts, data analysts, marketing strategists, educational tutors, coding assistants, and much more. The possibilities are limited only by your imagination and needs.
        </p>
      ),
    },
    {
      question: "Do I need technical knowledge to use this?",
      answer: (
        <p>
          No technical knowledge is required. The process is designed to be conversational and intuitive. Simply explain what you want your custom GPT to do, and the system will handle creating the technical instructions necessary to make it work as desired.
        </p>
      ),
    },
    {
      question: "Is there a limit to how many custom GPTs I can create?",
      answer: (
        <p>
          There's no limit to the number of custom GPTs you can create. You can create as many specialized assistants as you need for different purposes or projects.
        </p>
      ),
    },
    {
      question: "Will my custom GPT remember our previous conversations?",
      answer: (
        <p>
          Yes, your custom GPT will maintain context throughout a conversation session. However, like standard ChatGPT, it doesn't permanently store conversations between sessions unless you're using ChatGPT Plus with memory features enabled.
        </p>
      ),
    },
    {
      question: "Do I need a subscription to use CUSTOM GPT MAKER BOT?",
      answer: (
        <p>
          CUSTOM GPT MAKER BOT is available to users with access to OpenAI's GPT store. While basic functionality works with free accounts, some advanced features may require ChatGPT Plus subscription for optimal performance.
        </p>
      ),
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-black/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-semibold mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about CUSTOM GPT MAKER BOT and how to create your perfect AI assistant.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
