import { Squircle } from "@squircle-js/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { PERK_CATEGORIES_QUERY, PERKS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PerkCategory, PerkListItem } from "@/sanity/lib/types";

export const revalidate = 0;

const Featured = async () => {
  const [categories, perks] = await Promise.all([
    client.fetch<PerkCategory[]>(PERK_CATEGORIES_QUERY),
    client.fetch<PerkListItem[]>(PERKS_QUERY),
  ]);

  const perksByCategory = categories.reduce(
    (acc, category) => {
      acc[category._id] = perks.filter(
        (perk) => perk.category._id === category._id
      );
      return acc;
    },
    {} as Record<string, PerkListItem[]>
  );

  const PerkCard = ({ perk }: { perk: PerkListItem }) => (
    <Link href={`/featured/${perk.slug.current}`}>
      <Squircle
        cornerRadius={22}
        cornerSmoothing={1}
        className="flex h-full flex-col gap-6 rounded-[22px] border border-black/5 bg-white/95 p-6 transition hover:shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-snug text-[#101013]">
            {perk.title}
          </h3>
          <Image
            src={urlFor(perk.logo).width(40).height(40).url()}
            alt={`${perk.title} icon`}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </div>
        <p className="text-sm leading-6 text-[#212529]/80">
          {perk.shortDescription}
        </p>
        <div className="mt-auto flex items-end justify-between text-sm">
          <span className="flex items-center gap-2 font-semibold text-[#101013]">
            Claim Now <ArrowRight className="size-4" />
          </span>
          <div className="text-right text-[#008300]">
            <p className="text-xs uppercase tracking-[0.2em]">Deal</p>
            <p className="text-lg font-bold">{perk.dealValue}</p>
          </div>
        </div>
      </Squircle>
    </Link>
  );

  return (
    <section className="min-h-screen bg-[#D9E1D5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Access $1,000,000+ in founder perks & discounts.
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            No credit card required & instant access
          </p>
        </div>

        {categories.map((category) => {
          const categoryPerks = perksByCategory[category._id] || [];

          if (categoryPerks.length === 0) return null;

          return (
            <div key={category._id} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {category.name}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryPerks.map((perk) => (
                  <PerkCard key={perk._id} perk={perk} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Featured;