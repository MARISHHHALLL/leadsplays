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
  // Fetch data from Sanity
  const [categories, perks] = await Promise.all([
    client.fetch<PerkCategory[]>(PERK_CATEGORIES_QUERY),
    client.fetch<PerkListItem[]>(PERKS_QUERY),
  ]);

  // Group perks by category
  const perksByCategory = categories.reduce(
    (acc, category) => {
      acc[category._id] = perks.filter(
        (perk) => perk.category._id === category._id
      );
      return acc;
    },
    {} as Record<string, PerkListItem[]>
  );
  // Helper component for perk cards
  const PerkCard = ({ perk }: { perk: PerkListItem }) => (
    <Link href={`/featured/${perk.slug.current}`}>
      <Squircle
        cornerRadius={20}
        cornerSmoothing={1}
        className="flex flex-col gap-[21px] justify-between bg-white p-6 w-[320px] h-[257px] hover:shadow-lg transition-shadow cursor-pointer"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold tracking-[-0.8px] leading-[32px]">
              {perk.title}
            </h1>            <Image
              src={urlFor(perk.logo).width(40).height(40).url()}
              alt={`${perk.title} icon`}
              width={40}
              height={40}
              className="object-cover pointer-events-none"
            />
          </div>
          <p className="text-sm leading-6 font-normal text-[#212529]">
            {perk.shortDescription}
          </p>
        </div>
        <div className="flex flex-row items-end justify-between">
          <p className="flex flex-row items-center gap-[4px]">
            Claim Now <ArrowRight className="size-[16px]" />
          </p>
          <div className="flex flex-col items-end">
            <p className="text-sm leading-[26px] text-[#008300]">Deal</p>
            <h3 className="text-2xl leading-[26px] font-bold text-[#008300]">
              {perk.dealValue}
            </h3>
          </div>
        </div>
      </Squircle>
    </Link>
  );

  return (
    <div className="min-h-screen bg-[#D9E1D5] py-[100px]">
      <div className="max-w-[1008px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Access $1,000,000+ in founder perks & discounts.
          </h1>
          <p className="text-xl text-gray-600">
            No credit card required & instant access
          </p>
        </div>

        {/* Dynamic Categories and Perks */}
        {categories.map((category, categoryIndex) => {
          const categoryPerks = perksByCategory[category._id] || [];

          if (categoryPerks.length === 0) return null;

          return (
            <div
              key={category._id}
              className={categoryIndex === categories.length - 1 ? "" : "mb-16"}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPerks.map((perk) => (
                  <PerkCard key={perk._id} perk={perk} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
