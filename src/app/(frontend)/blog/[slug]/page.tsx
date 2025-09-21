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

export const revalidate = 0; // ISR: revalidate every minute

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
    <div className="w-full py-[100px] bg-[#D9E1D5]">
      <div className="max-w-[1008px] mx-auto">
        <Post data={post} />

        <div className="mt-10">
          <h2 className="text-[22px] font-semibold mb-3">Other articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherPosts.map((op) => {
              const href = `/blog/${op.slug.current}`;
              const imgUrl = op.mainImage
                ? urlFor(op.mainImage as any)
                    .width(600)
                    .height(360)
                    .url()
                : undefined;
              return (
                <Link
                  key={op._id}
                  href={href}
                  className="block rounded-[16px] overflow-hidden bg-[#0F1419] text-white"
                >
                  {imgUrl && (
                    <div className="relative w-full h-[160px]">
                      <Image
                        src={imgUrl}
                        alt={op.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold leading-6">{op.title}</h3>
                  </div>
                </Link>
              );
            })}
            <Link
              href="/blog"
              className="flex items-center justify-center rounded-[16px] bg-[#B6E58B] text-black"
            >
              <span className="font-semibold">Explore all articles →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
