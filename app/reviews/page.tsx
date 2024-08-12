import { FollowingPointer } from "@/components/FollowingPointer";
import { LampDemo } from "@/components/LampDemo";
import Review1 from "@/components/Review1";
import ReviewPage from "@/components/ReviewPage";
import React from "react";

const Reviews = () => {
  return (
    <div className="py-32 bg-slate-950">
      <LampDemo />
      {/* <Review1 /> */}
      <ReviewPage />

    </div>
  );
};

export default Reviews;
