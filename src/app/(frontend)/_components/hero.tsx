import { Button } from "@/components/ui/button";
import { BodyIcons } from "@/icons";
import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import Link from "next/link";

const imagesReviews = [
  {
    id: 1,
    image: "/images/Avatar-image.png",
  },
  {
    id: 2,
    image: "/images/Avatar-image-1.png",
  },
  {
    id: 3,
    image: "/images/Avatar-image-2.png",
  },
];

export const HeroComponents = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 flex justify-center opacity-70">
        <BodyIcons className="h-auto w-full max-w-7xl" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pt-10 pb-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-12 text-center">
          <h1 className="text-5xl leading-[1.2] font-semibold tracking-tight sm:text-5xl sm:leading-[1.1] lg:text-[82px] lg:leading-[92px]">
            Overspending on <span className="text-[#ABFF4F]">SaaS</span>?
            <br className="hidden sm:block" />
            Not Anymore.
          </h1>
          <p className="text-2xl font-normal tracking-tight">Join hundreds of founders saving<br />big on the tools that power their startups.</p>
          <Link href="/join?deal=work">
            <Squircle
              cornerRadius={16}
              cornerSmoothing={1}
              className="bg-[#ABFF4F] drop-shadow-[2px_2px_0px_#29BF12] transition hover:bg-[#ABFF4F]/80"
            >
              <Button className="h-14 px-10 text-lg font-bold text-black hover:bg-[#ABFF4F]/80 bg-[#ABFF4F] sm:h-16 sm:px-12 sm:text-2xl">
                Claim Now
              </Button>
            </Squircle>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-6">
          <div className="flex -space-x-3">
            {imagesReviews.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                alt={`Member avatar ${item.id}`}
                height={48}
                width={48}
                className="size-12 rounded-full border-2 border-black/10 object-cover"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-white/80 sm:text-base">
            4.6k Hardworking Members
          </p>
        </div>
      </div>
    </section>
  );
};