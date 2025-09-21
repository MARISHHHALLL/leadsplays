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
        .width(163)
        .height(204)
        .url()
    : undefined;

  return (
    <article className="flex flex-row gap-[50px]">
      <div className="relative w-[163px]  h-[204px] rounded-[14px] overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={data?.title ?? "Post image"}
            fill
            className="object-contain"
          />
        )}
      </div>
      <div className="w-fit flex flex-col gap-[30px]">
        {data?.title && (
          <h1 className="text-[48px] leading-[62px] font-semibold tracking-tight">
            {data.title}
          </h1>
        )}
        <p className="text-[#212529] text-[28px] leading-[48px]">
          <PortableText value={data.body as any} />
        </p>
      </div>
    </article>
  );
};
