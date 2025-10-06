import { Squircle } from "@squircle-js/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const BigCardClaim = () => {
  return (
    <Squircle
      cornerRadius={20}
      cornerSmoothing={1}
      height={400}
      width={1008}
      className="flex flex-col gap-[21px] justify-between bg-white p-6 w-full h-[360px] relative"
    >
      <Image
        src="/images/big-card-background.png"
        alt="background big card"
        fill
        className="-z-10"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-[104px] leading-auto font-semibold tracking-[-0.8px] ">
            Deel
          </h1>
          <Image
            src={"/images/deel-logo.png"}
            alt={`deel logo`}
            width={155}
            height={155}
            className="object-cover pointer-events-none"
          />
        </div>
        <p className="text-sm leading-6 font-normal text-[#212529]">
          Notify your teammates of the latest
          <br />
          activities with instant Slack
          <br />
          messages.
        </p>
      </div>
      <div className="flex flex-row items-end justify-between">
        <p className="flex flex-row items-center gap-[4px] font-semibold text-[18px]">
          Claim Now <ArrowRight className="size-[16px]" />
        </p>
        <div className="flex flex-col items-end">
          <p className="text-sm leading-[26px] text-[#008300]">Deal</p>
          <h3 className="text-[44px]  leading-[44px] font-bold text-[#008300]">
            $1.500
          </h3>
        </div>
      </div>
    </Squircle>
  );
};
