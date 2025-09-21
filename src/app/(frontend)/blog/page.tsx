import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Grow } from "../_components/grow";
import { BigCardClaim } from "@/components/shared/big-card-claim";

async function getData() {
  const data = await client.fetch<PostListItem[]>(POSTS_QUERY);
  return data;
}

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
  {
    id: 6,
    title: "Worried about",
    subtitle: "issues with your contractors?",
    image: "/images/grow/3.png",
  },
];

const Page = async () => {
  const data = await getData();
  return (
    <div className="w-full">
      <div className="py-[100px] bg-[url('/images/blog-background.png')]">
        <div className="max-w-[1008px] mx-auto flex flex-col gap-[60px] items-center">
          <h1 className="text-center text-[82px] font-semibold leading-[98px] text-[#ABFF4F]">
            Free Insights to Grow
            <br />
            Your Business.
          </h1>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row items-center flex-wrap gap-[10px]">
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
            </div>
            <BigCardClaim />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
