import clsx from "clsx";
import React from "react";

// [1200, 1399] [1400, 1599] [1600, 1899] [1900, 2099] [2100, 2399] [2400, ]
export const COLORS = [
  { l: 0, r: 1200, c: "#ffffff" },
  { l: 1200, r: 1400, c: `#828282` },
  { l: 1400, r: 1600, c: `#4BA59E` },
  { l: 1600, r: 1900, c: `#1B01F5` },
  { l: 1900, r: 2100, c: `#9B1EA4` },
  { l: 2100, r: 2400, c: `#F09235` },
  { l: 2400, r: 3000, c: `#EA3323` },
  { l: 3000, r: 4000, c: `#EA3323` },
];

export const ColorRating = React.memo(
  ({
    rating,
    ...props
  }: {
    rating: number;
    className?: string;
    children: any;
  }) => {
    const { children } = props;
    let c = COLORS.findIndex((v) => rating >= v.l && rating < v.r);
    const color = c >= 0 ? c : "-1";
    return (
      <span {...props} className={clsx("ff-ht", `rating-color-${color}`)}>
        {children}
      </span>
    );
  }
);

const RatingCircle = React.forwardRef<any, any>(
  ({ as, bsPrefix, variant, size, active, className, ...props }, ref) => {
    const { rating = 0 } = props;
    let idx = COLORS.findIndex((v) => rating >= v.l && rating < v.r);
    let c = COLORS[idx];
    let bgPercent = ((rating - c.l) * 100) / (c.r - c.l + 1);
    if (rating >= 3000) {
      bgPercent = 0;
    }
    return (
      <div className="rating-circle">
        <span
          ref={ref}
          {...props}
          className="inner-circle"
          style={{
            borderColor: `var(--rating-color-${idx})`,
            background: `linear-gradient(to top, var(--rating-color-${idx}) ${bgPercent}%, rgba(0, 0, 0, 0) ${bgPercent}%) border-box border-box`,
          }}
        ></span>
        {rating >= 3000 && <span className="inner-circle__plus"></span>}
      </div>
    );
  }
);

export default RatingCircle;
