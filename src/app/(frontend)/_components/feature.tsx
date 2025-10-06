import { BigCardClaim } from "@/components/shared/big-card-claim";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { RANDOM_PERKS_QUERY } from "@/sanity/lib/queries";
import { PerkListItem } from "@/sanity/lib/types";
import { unstable_noStore as noStore } from "next/cache";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Squircle } from "@squircle-js/react";

const PerkCard = ({ perk }: { perk: PerkListItem }) => {
  const imageUrl = urlFor(perk.logo).width(40).height(40).url();
  return (
    <Squircle
      cornerRadius={20}
      cornerSmoothing={1}
      className="flex flex-col gap-[21px] justify-between bg-white p-6 w-[320px]  h-[257px]"
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
    <section className="w-full bg-[url('/images/feature-background.png')] bg-cover bg-center">
      <div className="mx-auto flex max-w-[1008px] flex-col gap-12 px-4 py-16 sm:px-0 ">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-[#101013] sm:text-4xl lg:text-[42px]">
            Access $1,000,000+ in founder perks & discounts
          </h2>
          <p className="text-base text-[#212529]/70 sm:text-lg">
            No credit card required & instant access
          </p>
        </div>

        <div className="flex flex-col items-center gap-[24px] ">
          {primaryPerks.length === 0 && (
            <p className="text-sm text-[#212529]/70">
              New deals are on their way. Check back soon!
            </p>
          )}

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {primaryPerks.map((perk) => (
              <PerkCard key={perk._id} perk={perk} />
            ))}
          </div>

          <div className="hidden md:block w-full">
            <BigCardClaim />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryPerks.map((perk) => (
              <PerkCard key={perk._id} perk={perk} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/featured"
            className="flex items-center gap-2 text-lg font-semibold text-[#101013] transition hover:text-[#008300]"
          >
            Explore all deals <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};