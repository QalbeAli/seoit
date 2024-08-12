import React from "react";
import { allBlogs } from "contentlayer/generated";
import RecentPosts from "@/components/Home/RecentPosts";
import { FollowingPointer } from "@/components/FollowingPointer";
const BlogPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <RecentPosts blogs={allBlogs} />

      </div>
      <div>
      </div>
    </>
  );
};

export default BlogPage;
