import Image from "next/image";
import { FollowerPointerCard } from "@/components/FollowingPointerCard";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export function FollowingPointer({ blog }: any) {
  return (
    <div className="w-80 mx-auto ">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <Link href={blog.url}>
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 md:cursor-none sm:cursor-default ">
            <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <Image
                src={blog.image.filePath.replace("../public", "")}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
              />
            </div>
            <div className=" p-4">
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {blog.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-zinc-500">
                {blogContent.description}
              </h2>
              <div className="flex flex-row justify-between items-center mt-10">
                <span className="text-sm text-gray-500">
                  {blogContent.date}
                </span>
                <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Jez Kez",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "test.png",
  authorAvatar: "/john.webp",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
