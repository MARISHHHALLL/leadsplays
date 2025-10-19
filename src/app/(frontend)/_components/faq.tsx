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
    question: "What exactly is LeadsPlays?",
    answer:
      "LeadsPlays is a free platform that gives founders and startups instant access to $1M+ worth of exclusive deals, credits, and discounts from trusted SaaS and business service partners. No hidden fees or credit card required.",
  },
  {
    id: 2,
    question: "Who can join?",
    answer:
      "Anyone building or running a startup, small business, or digital project can join. Whether you're pre-launch, scaling, or raising your next round, you’ll find perks tailored to your stage.",
  },
  {
    id: 3,
    question: "How do I claim a deal?",
    answer:
      "Just click “Claim Now” on any offer, sign up (if needed), and you’ll get direct access to the discount or promo link instantly. No waiting or complicated verification steps.",
  },
  {
    id: 4,
    question: "Is it really free?",
    answer:
      "Yes — 100% free. LeadsPlays earns partnerships with SaaS companies so you can save without paying us a cent. You’ll never be asked for a credit card to access deals.",
  },
  {
    id: 5,
    question: "What kind of deals can I expect?",
    answer:
      "You’ll find discounts, credits, and free trials from top tools like AWS, Slack, Brex, Mixpanel, Drift, and more — covering marketing, analytics, cloud hosting, HR, and productivity.",
  },
  {
    id: 6,
    question: "How do you choose your partners?",
    answer:
      "We carefully vet every partner for quality, reliability, and relevance to startups. Only verified and reputable SaaS tools make it to our platform.",
  },
  {
    id: 7,
    question: "Can I suggest a company or tool to be added?",
    answer:
      "Absolutely! We’re always expanding our partner list. Send us a message through the Contact page or email us your recommendation.",
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