import { sortBlogs } from "@/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { FollowingPointer } from "../FollowingPointer";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full bg-dark text-white   py-32   px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-center items-center">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-white dark:text-light">
          SEOIT BLOGS
        </h2>
     
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative ">
              <FollowingPointer blog={blog} />
              {/* <BlogLayoutThree blog={blog} /> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
