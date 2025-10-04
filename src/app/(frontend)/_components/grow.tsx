import { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

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
            className="h-[403px] w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <h3 className="text-xl font-semibold leading-7 text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-white/70">Read more</p>
          </div>
        </Fragment>
      ) : (
        <div className="flex h-[403px] w-full flex-col justify-between bg-[#0F1010] p-6">
          <h3 className="text-2xl font-semibold leading-7 text-white">{post.title}</h3>
          <p className="text-sm text-white/70">Read more</p>
        </div>
      )}
    </Link>
  );
};

export const Grow = async () => {
  noStore();

  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY);
  const featuredPosts = posts.slice(0, 5);

  return (
    <section className="w-full py-[100px]">
      <div className="mx-auto max-w-[1008px] flex flex-col items-center gap-[60px]">
        {featuredPosts.length === 0 ? (
          <p className="text-center text-lg text-white/70">New stories are coming soon.</p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
            <Link
              href="/blog"
              className="flex h-[403px] items-center justify-center rounded-2xl bg-[#ABFF4F] p-5 text-black transition hover:brightness-110"
            >
              <span className="text-2xl font-semibold leading-6">Explore all articles -&gt;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Grow;
