import React from "react";
import Image from "next/image";
import Link from "next/link";

type Insight = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
};

const insights: Insight[] = [
  {
    id: 1,
    title: "Calvin ensures",
    subtitle: "safe payments to contractors.",
    image: "/images/grow/1.png",
  },
  {
    id: 2,
    title: "How to make",
    subtitle: "secure payments to contractors?",
    image: "/images/grow/4.png",
  },
  {
    id: 3,
    title: "Worried about",
    subtitle: "issues with your contractors?",
    image: "/images/grow/3.png",
  },
  {
    id: 4,
    title: "How to make",
    subtitle: "secure payments to contractors?",
    image: "/images/grow/5.png",
  },
  {
    id: 5,
    title: "Worried about",
    subtitle: "issues with your contractors?",
    image: "/images/grow/2.png",
  },
];

export const Grow: React.FC = () => {
  return (
    <section className="w-full py-[100px] ">
      <div className="mx-auto max-w-[1008px] flex flex-col items-center gap-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {insights.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-2xl border border-[#6DFF54]/40 bg-[#0F1010]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={342}
                height={220}
                className="h-[403px] w-[322px] object-cover opacity-90"
              />
            </div>
          ))}

          <Link
            href="#"
            className="flex items-center justify-center rounded-2xl bg-[#ABFF4F] text-black p-5 h-[403px]"
          >
            <span className=" font-semibold leading-6 text-black text-2xl">
              Explore all articles →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Grow;
