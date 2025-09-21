import { HeroComponents } from "./_components/hero";
import Link from "next/link";
import { Feature } from "./_components/feature";
import { FeedBack } from "./_components/feedback";
import { Grow } from "./_components/grow";
import { FAQ } from "./_components/faq";

export default function Home() {
  return (
    <div>
      <HeroComponents />
      <Feature />
      <FeedBack />
      <div className="py-[100px] bg-[url('/images/blog-background.png')]">
        <div className="max-w-[1008px] mx-auto flex flex-col gap-[60px] items-center">
          <h1 className="text-center text-[82px] font-semibold leading-[98px] text-[#ABFF4F]">
            Free Insights to Grow
            <br />
            Your Business.
          </h1>
          <Grow />
        </div>
      </div>
      <FAQ />
    </div>
  );
}
