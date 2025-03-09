import React from "react";

interface RatingCircleProps {
  rating: number;
  color: string;
  percent: number;
}

const RatingCircle = React.memo(
  ({ rating, color, percent }: RatingCircleProps) => {
    return (
      <div
        className={`inline-block size-[1em] rounded-full`}
        style={{
          borderColor: color,
          borderWidth: "0.1em",
          backgroundImage: `linear-gradient(to top, ${color} ${percent}%, rgba(0, 0, 0, 0) ${percent}%)`,
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
    );
  }
);

RatingCircle.displayName = "RatingCircle";
export { RatingCircle };
