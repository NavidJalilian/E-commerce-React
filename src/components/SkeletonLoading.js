import React from "react";
import "./SkeletonLoading.css";
export default function SkeletonLoading() {
  return (
    <div className="skeleton-loading">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
function SkeletonCard() {
  return <div className="skeleton-card"></div>;
}
