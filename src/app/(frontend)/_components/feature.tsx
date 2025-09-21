import { BigCardClaim } from "@/components/shared/big-card-claim";
import { Squircle } from "@squircle-js/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Slack",
    image: "/images/slack.png",
    description:
      "Notify your teammates of the latest\nactivities with instant Slack\nmessages.",
    deal: "$120.000",
  },
  {
    id: 2,
    title: "Notion",
    image: "/images/slack.png",
    description:
      "Organize your team's knowledge and\nwork in one connected workspace\nwith Notion.",
    deal: "$150.000",
  },
  {
    id: 3,
    title: "Figma",
    image: "/images/slack.png",
    description:
      "Design, prototype, and collaborate\nwith your team using Figma's\npowerful design tools.",
    deal: "$200.000",
  },
];

export const Feature = () => {
  return (
    <div className="w-full py-[100px] bg-[url('/images/feature-background.png')] bg-cover bg-center h-[1657px]">
      <div className="mx-auto max-w-[1008px] flex flex-col items-center gap-[60px]">
        <div className="flex flex-col gap-[10px] items-center">
          <h3 className="text-4xl leading-[52px] font-semibold tracking-[-2px] text-[#101013]">
            Access $1,000,000+ in founder perks & discounts
          </h3>
          <p className="text-[22px] leading-[27px] tracking-[-2%] text-[#212529]/70">
            No credit card required & instant access
          </p>
        </div>
        <div className="flex flex-row items-center gap-5 flex-wrap">
          <div className="flex flex-row items-center gap-5 flex-wrap">
            {data.map((item) => (
              <Squircle
                key={item.id}
                cornerRadius={20}
                cornerSmoothing={1}
                className="flex flex-col gap-[21px] justify-between bg-white p-6 w-[320px] h-[257px]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-2xl font-semibold tracking-[-0.8px] leading-[32px]">
                      {item.title}
                    </h1>
                    <Image
                      src={item.image}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                      className="object-cover pointer-events-none"
                    />
                  </div>
                  <p className="text-sm leading-6 font-normal text-[#212529]">
                    {item.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < item.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex flex-row items-end justify-between">
                  <p className="flex flex-row items-center gap-[4px]">
                    Claim Now <ArrowRight className="size-[16px]" />
                  </p>
                  <div className="flex flex-col items-end">
                    <p className="text-sm leading-[26px] text-[#008300]">
                      Deal
                    </p>
                    <h3 className="text-2xl leading-[26px] font-bold text-[#008300]">
                      {item.deal}
                    </h3>
                  </div>
                </div>
              </Squircle>
            ))}
          </div>
          <BigCardClaim />
          <div className="flex flex-row items-center gap-5 flex-wrap">
            {Array.from({ length: 6 }).map((_, index) => (
              <Squircle
                key={index}
                cornerRadius={20}
                cornerSmoothing={1}
                className="flex flex-col gap-[21px] justify-between bg-white p-6 w-[320px] h-[257px]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-2xl font-semibold tracking-[-0.8px] leading-[32px]">
                      Figma
                    </h1>
                    <Image
                      src={"/images/slack.png"}
                      alt={`${index} icon`}
                      width={40}
                      height={40}
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
                  <p className="flex flex-row items-center gap-[4px]">
                    Claim Now <ArrowRight className="size-[16px]" />
                  </p>
                  <div className="flex flex-col items-end">
                    <p className="text-sm leading-[26px] text-[#008300]">
                      Deal
                    </p>
                    <h3 className="text-2xl leading-[26px] font-bold text-[#008300]">
                      $150.000
                    </h3>
                  </div>
                </div>
              </Squircle>
            ))}
          </div>
        </div>
        <Link href={"#"}>
          <div className="flex flex-row items-center gap-[6px] text-2xl font-semibold">
            Explore all deals <ArrowRight className="size-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};
