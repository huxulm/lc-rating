import clsx from "clsx";
import React from "react";
// [1200, 1399] [1400, 1599] [1600, 1899] [1900, 2099] [2100, 2399] [2400, ]
export const COLORS = [
  { l: 0, r: 1200, c: "#ffffff" },
  { l: 1200, r: 1400, c: `#377e22c0` },
  { l: 1400, r: 1600, c: `#4ba59dbe` },
  { l: 1600, r: 1900, c: `#3520f2b1` },
  { l: 1900, r: 2100, c: `#9b1ea4b2` },
  { l: 2100, r: 2400, c: `#f09235ae` },
  { l: 2400, r: 3000, c: `#ea3423b8` },
  { l: 3000, r: 4000, c: `#ea3423b8` },
];
const RatingText = React.forwardRef<any, any>(
  ({ as, bsPrefix, variant, size, active, className, ...props }, ref) => {
    const { difficulty = 0 } = props;
    let idx = COLORS.findIndex((v) => difficulty >= v.l && difficulty < v.r);
    let c = COLORS[idx];
    let rating = c && ((difficulty - c.l) * 100) / (c.r - c.l + 1);
    if (difficulty >= 3000) {
      rating = 100;
    }
    return (
      <div
        ref={ref}
        className={clsx(className, "ff-ht")}
        {...props}
        style={{
          color: `black`,
          background: `linear-gradient(to right, var(--rating-color-${idx}) ${rating}%, rgba(0, 0, 0, 0) ${rating}%) border-box border-box`,
        }}
      ></div>
    );
  }
);

export default RatingText;
