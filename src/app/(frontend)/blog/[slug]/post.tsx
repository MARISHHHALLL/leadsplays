import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BigCardClaim } from "@/components/shared/big-card-claim";
import { PortableText } from "next-sanity";

type PostProps = {
  data: {
    title?: string;
    description?: string;
    mainImage?: unknown;
    body?: unknown;
  };
};

export const Post = ({ data }: PostProps) => {
  const imageUrl = data?.mainImage
    ? urlFor(data.mainImage as any)
      .width(640)
      .height(480)
      .url()
    : undefined;

  return (
    <article className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {imageUrl && (
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl h-fit lg:max-w-xs">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={imageUrl}
              alt={data?.title ?? "Post image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex w-full max-w-3xl flex-col gap-6">
        {data?.title && (
          <h1 className="text-3xl font-semibold leading-tight text-[#101013] sm:text-4xl">
            {data.title}
          </h1>
        )}
        <div className="prose prose-lg max-w-none text-[#212529]">
          <PortableText value={data.body as any} />
        </div>
      </div>
    </article>
  );
};