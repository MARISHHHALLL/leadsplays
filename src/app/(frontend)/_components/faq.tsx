"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What is the perfect idea to get deals ?",
    answer:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
  },
  {
    id: 2,
    question: "What is the perfect idea to get deals ?",
    answer:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
  },
  {
    id: 3,
    question: "What is the perfect idea to get deals ?",
    answer:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
  },
  {
    id: 4,
    question: "What is the perfect idea to get deals ?",
    answer:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
  },
];

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-[100px] bg-[#F5EEE9]">
      <div className="mx-auto max-w-[1008px] flex flex-col items-center gap-[40px]">
        <h2 className="text-[40px] leading-[44px] font-semibold text-[#101013]">
          FAQ
        </h2>
        <div className="w-full flex flex-col gap-5">
          {faqs.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className="bg-white rounded-2xl p-[33px]"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#101013] font-semibold text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-7 text-[#101013] transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-[#212529]/70 text-[22px] leading-7 font-light">
                    “{item.answer}”
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
