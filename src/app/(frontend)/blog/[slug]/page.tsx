import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/lib/types";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "./post";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 0;

export async function generateStaticParams() {
  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY);
  return posts.map((post) => ({ slug: post.slug.current }));
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  const allPosts = await client.fetch<PostListItem[]>(POSTS_QUERY);
  const otherPosts = allPosts
    .filter((p) => p.slug.current !== slug)
    .slice(0, 2);

  if (!post) {
    return null;
  }

  return (
    <section className="min-h-screen bg-[#D9E1D5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Post data={post} />

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#101013] sm:text-3xl">
            Other articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((op) => {
              const href = `/blog/${op.slug.current}`;
              const imgUrl = op.mainImage
                ? urlFor(op.mainImage as any).width(600).height(360).url()
                : undefined;
              return (
                <Link
                  key={op._id}
                  href={href}
                  className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#0F1419] text-white transition hover:shadow-lg"
                >
                  {imgUrl && (
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={imgUrl}
                        alt={op.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </Link>
              );
            })}
            <Link
              href="/blog"
              className="flex items-center justify-center rounded-2xl bg-[#B6E58B] px-6 py-8 text-center text-lg font-semibold text-black transition hover:brightness-110"
            >
              Explore all articles &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;