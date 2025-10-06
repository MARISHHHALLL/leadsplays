import { HeroComponents } from "./_components/hero";
import { Feature } from "./_components/feature";
import { FeedBack } from "./_components/feedback";
import { Grow } from "./_components/grow";
import { FAQ } from "./_components/faq";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroComponents />
      <Feature />
      <FeedBack />
      <section className="py-[100px] bg-[url('/images/blog-background.png')] bg-cover bg-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center text-[#ABFF4F] sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[68px] lg:leading-tight">
            Free Insights to Grow Your Business.
          </h2>
          <Grow />
        </div>
      </section>
      <FAQ />
    </div>
  );
}