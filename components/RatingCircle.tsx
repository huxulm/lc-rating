import React from "react";

// [1200, 1399] [1400, 1599] [1600, 1899] [1900, 2099] [2100, 2399] [2400, ]
export const COLORS = [
  { l: 1200, r: 1400, c: `#377E22` },
  { l: 1400, r: 1600, c: `#4BA59E` },
  { l: 1600, r: 1900, c: `#1B01F5` },
  { l: 1900, r: 2100, c: `#9B1EA4` },
  { l: 2100, r: 2400, c: `#F09235` },
  { l: 2400, r: 3600, c: `#EA3323` },
];

export const ColorRating = React.memo(({rating, ...props}: {rating: number, children: any}) => {
  const { children } = props;
  let c = COLORS.find((v) => rating >= v.l && rating < v.r);
  const color = c && c.c;
  return <span {...props} style={{
    color: `${color}`}}>
      {children}
  </span>
})

const RatingCircle = React.forwardRef<any, any>(
  ({ as, bsPrefix, variant, size, active, className, ...props }, ref) => {
    const { difficulty = 0 } = props;
    let c = COLORS.find((v) => difficulty >= v.l && difficulty < v.r);
    let color = c && c.c;
    let rating = c && ((difficulty - c.l) * 100) / (c.r - c.l + 1);
    return (
      <span
        ref={ref}
        {...props}
        className="topcoder-like-circle"
        style={{
          borderColor: `${color}`,
          background: `linear-gradient(to top, ${color} ${rating}%, rgba(0, 0, 0, 0) ${rating}%) border-box border-box`,
        }}
      ></span>
    );
  }
);

export default RatingCircle;
