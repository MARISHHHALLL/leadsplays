import { Button } from "@/components/ui/button";
import { BodyIcons } from "@/icons";
import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import React from "react";

const images_reviews = [
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
    <div className="bg-black relative h-[606px] w-full z-0 overflow-hidden">
      <div className="absolute top-0 left-0 h-fit w-full z-10 pointer-events-none">
        <BodyIcons className="h-fit" />
      </div>
      <div className="z-20 py-[70px] text-white max-w-[1248px] mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[87px]">
          <h1 className="text-[82px] leading-[92px] font-semibold tracking-[-4%] text-white text-center">
            Overspending on <span className="text-[#ABFF4F]">SaaS</span>?
            <br />
            Not Anymore.
          </h1>
          <Squircle
            cornerRadius={12}
            cornerSmoothing={1}
            className="h-[85px] drop-shadow-[2px_2px_0px_#29BF12] bg-[#ABFF4F] hover:bg-[#ABFF4F]/80"
          >
            <Button className="px-[40px] h-full  py-[20px] bg-transparent text-[30px] text-black  hover:bg-[#ABFF4F]/80 font-bold ">
              Claim Now
            </Button>
          </Squircle>
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="flex flex-row items-center -space-x-4">
            {images_reviews.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                alt={`image-${item.id}`}
                height={40}
                width={40}
                className="size-10 object-cover"
              />
            ))}
          </div>
          <p className="text-base font-medium leading-[24px] text-white/70">
            4.6k Hardworking Members
          </p>
        </div>
      </div>
    </div>
  );
};
