import { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";

import { BigCardClaim } from "@/components/shared/big-card-claim";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/lib/types";

async function getData() {
  const data = await client.fetch<PostListItem[]>(POSTS_QUERY);
  return data;
}

const PostCard = ({ post }: { post: PostListItem }) => {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(342).height(403).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="relative block overflow-hidden rounded-2xl border border-[#6DFF54]/40 bg-[#0F1010]"
    >
      {imageUrl ? (
        <Fragment>
          <Image
            src={imageUrl}
            alt={post.title}
            width={342}
            height={403}
            className="h-[403px] w-[322px] object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <h3 className="text-xl font-semibold leading-7 text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-white/70">Read more</p>
          </div>
        </Fragment>
      ) : (
        <div className="flex h-[403px] w-[322px] flex-col justify-between bg-[#0F1010] p-6">
          <h3 className="text-2xl font-semibold leading-7 text-white">{post.title}</h3>
          <p className="text-sm text-white/70">Read more</p>
        </div>
      )}
    </Link>
  );
};

const Page = async () => {
  const posts = await getData();

  return (
    <div className="w-full">
      <div className="bg-[url('/images/blog-background.png')] py-[100px]">
        <div className="mx-auto flex max-w-[1008px] flex-col items-center gap-[60px]">
          <h1 className="text-center text-[82px] font-semibold leading-[98px] text-[#ABFF4F]">
            Free Insights to Grow
            <br />
            Your Business.
          </h1>
          <div className="flex w-full flex-col gap-[10px]">
            <div className="flex flex-row flex-wrap items-center gap-[10px]">
              {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post._id} post={post} />)
              ) : (
                <p className="text-sm text-white/70">No posts published yet. Check back soon.</p>
              )}
            </div>
            <BigCardClaim />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
