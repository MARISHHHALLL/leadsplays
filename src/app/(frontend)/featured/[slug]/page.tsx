import { Squircle } from "@squircle-js/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PERK_QUERY, RELATED_PERKS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Perk, PerkListItem } from "@/sanity/lib/types";
import { PortableText } from "@portabletext/react";

interface PerkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PerkDetailPage = async ({ params }: PerkDetailPageProps) => {
  const { slug } = await params;
  const perk = await client.fetch<Perk>(PERK_QUERY, { slug });

  if (!perk) {
    notFound();
  }

  const relatedPerks = await client.fetch<PerkListItem[]>(RELATED_PERKS_QUERY, {
    categoryId: perk.category._id,
    currentSlug: slug,
  });

  return (
    <div className="min-h-screen bg-[#D9E1D5] py-[100px]">
      <div className="max-w-[1008px] mx-auto">
        {/* Back Button */}
        <Link
          href="/featured"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className=" rounded-2xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {perk.title}
              </h1>

              {perk.longDescription && (
                <div className="prose prose-lg max-w-none">
                  <PortableText value={perk.longDescription} />
                </div>
              )}
            </div>

            {/* Related Perks */}
            {relatedPerks.length > 0 && (
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Other deals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPerks.map((relatedPerk) => (
                    <Link
                      key={relatedPerk._id}
                      href={`/featured/${relatedPerk.slug.current}`}
                    >
                      <Squircle
                        cornerRadius={20}
                        cornerSmoothing={1}
                        className="flex flex-col gap-4 justify-between bg-gray-50 p-4 h-[200px] hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-row justify-between items-start">
                            <h3 className="text-lg font-semibold leading-tight">
                              {relatedPerk.title}
                            </h3>
                            <Image
                              src={urlFor(relatedPerk.logo)
                                .width(32)
                                .height(32)
                                .url()}
                              alt={`${relatedPerk.title} icon`}
                              width={32}
                              height={32}
                              className="object-cover pointer-events-none flex-shrink-0"
                            />
                          </div>
                          <p className="text-sm leading-5 font-normal text-gray-700 line-clamp-3">
                            {relatedPerk.shortDescription}
                          </p>
                        </div>
                        <div className="flex flex-row items-end justify-between">
                          <p className="flex flex-row items-center gap-1 text-sm">
                            Claim Now <ArrowRight className="size-3" />
                          </p>
                          <div className="flex flex-col items-end">
                            <p className="text-xs text-[#008300]">Deal</p>
                            <p className="text-lg font-bold text-[#008300]">
                              {relatedPerk.dealValue}
                            </p>
                          </div>
                        </div>
                      </Squircle>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Squircle
                cornerRadius={20}
                cornerSmoothing={1}
                className="bg-white p-6 flex flex-col gap-6"
              >
                <div className="flex flex-row justify-between items-start">
                  <h2 className="text-2xl font-semibold leading-tight">
                    {perk.title}
                  </h2>
                  <Image
                    src={urlFor(perk.logo).width(40).height(40).url()}
                    alt={`${perk.title} icon`}
                    width={40}
                    height={40}
                    className="object-cover pointer-events-none"
                  />
                </div>

                <p className="text-sm leading-6 font-normal text-gray-700">
                  {perk.shortDescription}
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-sm text-[#008300]">Deal</p>
                    <p className="text-3xl font-bold text-[#008300]">
                      ${perk.dealValue}
                    </p>
                  </div>

                  {perk.claimUrl ? (
                    <a
                      href={perk.claimUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#008300] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#006600] transition-colors"
                    >
                      Get Now
                    </a>
                  ) : (
                    <button className="w-full bg-[#008300] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006600] transition-colors">
                      Get Now
                    </button>
                  )}
                </div>
              </Squircle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerkDetailPage;
