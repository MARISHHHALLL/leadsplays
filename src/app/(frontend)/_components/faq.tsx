"use client";

import { useState } from "react";
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

export const FAQ = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#F5EEE9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-[#101013] sm:text-4xl">FAQ</h2>
        <div className="w-full space-y-4 text-left">
          {faqs.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:p-7"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-[#101013] sm:text-xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-6 text-[#101013] transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-[#212529]/70 sm:text-base">
                    "{item.answer}"
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