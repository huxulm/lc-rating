import { cn } from "@/lib/utils";
import React from "react";

const ratingList = [
  { l: 1000, r: 1200, c: "#C0C0C0" },
  { l: 1200, r: 1400, c: "#A0BA87" },
  { l: 1400, r: 1600, c: "#80B44E" },
  { l: 1600, r: 1900, c: "#FFB800" },
  { l: 1900, r: 2100, c: "#FF9616" },
  { l: 2100, r: 2400, c: "#FF732B" },
  { l: 2400, r: 3000, c: "#FF2D55" },
  { l: 3000, r: 4000, c: "#663399" },
];

export const ratingInfo = (rating: number) => {
  const item = ratingList.find((x) => rating < x.r) || {
    l: 0,
    r: Infinity,
    c: "#ffffff",
  };
  const res = {
    color: item.c,
    percent: ((rating - item.l) / (item.r - item.l)) * 100,
  };
  if (item.r === Infinity) res.percent = 100;
  return res;
};

interface RatingCircleProps {
  rating: number;
  color: string;
  percent: number;
}

const RatingCircle = React.memo(
  ({ rating, color, percent }: RatingCircleProps) => {
    return (
      <div className={cn("flex items-center gap-1", "relative", "group")}>
        <div
          className="inline-block size-[1em] rounded-full"
          style={{
            borderColor: color,
            borderWidth: "0.1em",
            backgroundImage: `linear-gradient(to top, ${color} ${percent}%, rgba(0, 0, 0, 0) ${percent}%)`,
          }}
        />
        <span
          className={cn(
            "absolute",
            "left-1/2 -translate-x-1/2",
            "top-0 -translate-y-full",
            "opacity-0 group-hover:opacity-100",
            "transition-all duration-500 ease-in-out",
          )}
          style={{
            color: color,
          }}
        >
          {rating.toFixed(0)}
        </span>
      </div>
    );
  }
);

RatingCircle.displayName = "RatingCircle";
export { RatingCircle };
