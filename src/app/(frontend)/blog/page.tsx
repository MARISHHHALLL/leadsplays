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
    ? urlFor(post.mainImage).width(600).height(720).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex h-full flex-col w-[323px] overflow-hidden rounded-[20px]  bg-[#0F1010] text-white transition hover:shadow-lg"
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

const Page = async () => {
  const posts = await getData();
  const hasPosts = posts.length > 0;

  return (
    <section className="min-h-screen bg-[url('/images/blog-background.png')] bg-cover bg-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 text-center text-[#ABFF4F] sm:px-6 lg:px-8 lg:py-24">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[68px] lg:leading-tight">
          Free Insights to Grow Your Business.
        </h1>
        <div className={`grid grid-cols-1 w-full md:place-items-start  place-items-center gap-6 text-left ${hasPosts ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
          {hasPosts ? (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="sm:col-span-2 lg:col-span-3 text-sm text-white/80">
              No posts published yet. Check back soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;