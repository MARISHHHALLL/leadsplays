import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

const PostCard = ({ post }: { post: PostListItem }) => {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(720).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#6DFF54]/40 bg-[#0F1010] text-white transition hover:shadow-lg"
    >
      {imageUrl ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
      ) : (
        <div className="flex flex-1 flex-col justify-between bg-[#0F1010] p-6">
          <h3 className="text-xl font-semibold leading-7">{post.title}</h3>
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
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
        {featuredPosts.length === 0 ? (
          <p className="text-center text-lg text-white/70">
            New stories are coming soon.
          </p>
        ) : (
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
            <Link
              href="/blog"
              className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl bg-[#ABFF4F] p-6 text-center text-black transition hover:brightness-110"
            >
              <span className="text-xl font-semibold leading-6">
                Explore all articles &gt;
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Grow;