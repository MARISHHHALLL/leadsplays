import { BigCardClaim } from "@/components/shared/big-card-claim";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { RANDOM_PERKS_QUERY } from "@/sanity/lib/queries";
import { PerkListItem } from "@/sanity/lib/types";
import { Squircle } from "@squircle-js/react";
import { unstable_noStore as noStore } from "next/cache";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PerkCard = ({ perk }: { perk: PerkListItem }) => {
  const imageUrl = urlFor(perk.logo).width(40).height(40).url();
  console.log("perks", perk)
  return (
    <Squircle
      cornerRadius={20}
      cornerSmoothing={1}
      className="flex flex-col gap-[21px] justify-between bg-white p-6 w-[320px] h-[257px]"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-semibold tracking-[-0.8px] leading-[32px]">
            {perk.title}
          </h1>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${perk.title} icon`}
              width={40}
              height={40}
              className="object-cover pointer-events-none"
            />
          ) : null}
        </div>
        <p className="text-sm leading-6 font-normal text-[#212529]">
          {perk.shortDescription}
        </p>
      </div>
      <div className="flex flex-row items-end justify-between">
        <Link href={perk.claimUrl || "#"} className="flex flex-row items-center gap-[4px] cursor-pointer">
          Claim Now <ArrowRight className="size-[16px]" />
        </Link>
        <div className="flex flex-col items-end">
          <p className="text-sm leading-[26px] text-[#008300]">Deal</p>
          <h3 className="text-2xl leading-[26px] font-bold text-[#008300]">
            {perk.dealValue || "View details"}
          </h3>
        </div>
      </div>
    </Squircle>
  );
};

export const Feature = async () => {
  noStore();

  const perks = await client.fetch<PerkListItem[]>(RANDOM_PERKS_QUERY);
  const shuffledPerks = [...perks].sort(() => Math.random() - 0.5);
  const primaryPerks = shuffledPerks.slice(0, 3);
  const secondaryPerks = shuffledPerks.slice(3, 9);

  return (
    <div className="w-full py-[100px] bg-[url('/images/feature-background.png')] bg-cover bg-center">
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
            {primaryPerks.map((perk) => (
              <PerkCard key={perk._id} perk={perk} />
            ))}
            {primaryPerks.length === 0 && (
              <p className="text-sm text-[#212529]/70">
                New deals are on their way. Check back soon!
              </p>
            )}
          </div>
          <BigCardClaim />
          {secondaryPerks.length > 0 && (
            <div className="flex flex-row items-center gap-5 flex-wrap">
              {secondaryPerks.map((perk) => (
                <PerkCard key={perk._id} perk={perk} />
              ))}
            </div>
          )}
        </div>
        <Link href="/featured">
          <div className="flex flex-row items-center gap-[6px] text-2xl font-semibold">
            Explore all deals <ArrowRight className="size-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};
