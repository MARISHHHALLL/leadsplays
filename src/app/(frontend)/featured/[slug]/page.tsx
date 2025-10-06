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
    <section className="min-h-screen bg-[#D9E1D5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Link
          href="/featured"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-gray-900"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl  p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {perk.title}
              </h1>
              {perk.longDescription && (
                <div className="prose prose-lg mt-6 max-w-none text-gray-700">
                  <PortableText value={perk.longDescription} />
                </div>
              )}
            </div>

            {relatedPerks.length > 0 && (
              <div className="rounded-2xl ">
                <h2 className="text-2xl font-semibold text-gray-900">Other deals</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPerks.map((relatedPerk) => (
                    <Link
                      key={relatedPerk._id}
                      href={`/featured/${relatedPerk.slug.current}`}
                    >
                      <Squircle
                        cornerRadius={20}
                        cornerSmoothing={1}
                        className="flex h-full flex-col gap-4 rounded-[20px] bg-gray-50 p-5 transition hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold leading-snug text-gray-900">
                            {relatedPerk.title}
                          </h3>
                          <Image
                            src={urlFor(relatedPerk.logo).width(32).height(32).url()}
                            alt={`${relatedPerk.title} icon`}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                        <p className="text-sm leading-6 text-gray-600 line-clamp-3">
                          {relatedPerk.shortDescription}
                        </p>
                        <div className="mt-auto flex items-end justify-between text-sm text-gray-900">
                          <span className="flex items-center gap-1">
                            Claim Now <ArrowRight className="size-3" />
                          </span>
                          <div className="text-right text-[#008300]">
                            <p className="text-xs uppercase tracking-[0.2em]">Deal</p>
                            <p className="text-lg font-bold">{relatedPerk.dealValue}</p>
                          </div>
                        </div>
                      </Squircle>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <Squircle
                cornerRadius={22}
                cornerSmoothing={1}
                className="flex flex-col gap-6 rounded-[22px] bg-white p-6 shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold leading-snug text-gray-900">
                    {perk.title}
                  </h2>
                  <Image
                    src={urlFor(perk.logo).width(48).height(48).url()}
                    alt={`${perk.title} icon`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  {perk.shortDescription}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[#008300]">
                    <p className="text-sm uppercase tracking-[0.2em]">Deal</p>
                    <p className="text-3xl font-bold">{perk.dealValue}</p>
                  </div>

                  {perk.claimUrl ? (
                    <a
                      href={perk.claimUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-[#008300] px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-[#006600]"
                    >
                      Get Now
                    </a>
                  ) : (
                    <button className="w-full rounded-xl bg-[#008300] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#006600]">
                      Get Now
                    </button>
                  )}
                </div>
              </Squircle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerkDetailPage;