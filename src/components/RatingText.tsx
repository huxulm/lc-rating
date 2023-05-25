import React from "react";

// [1200, 1399] [1400, 1599] [1600, 1899] [1900, 2099] [2100, 2399] [2400, ]
export const COLORS = [
  { l: 0, r: 1200, c: '#ffffff' },
  { l: 1200, r: 1400, c: `#377E22` },
  { l: 1400, r: 1600, c: `#4BA59E` },
  { l: 1600, r: 1900, c: `#1B01F5` },
  { l: 1900, r: 2100, c: `#9B1EA4` },
  { l: 2100, r: 2400, c: `#F09235` },
  { l: 2400, r: 3600, c: `#EA3323` },
];
const RatingText = React.forwardRef<any, any>(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
    const { difficulty = 0 } = props;
  let c = COLORS.find((v) => difficulty >= v.l && difficulty < v.r);
  let color = c && c.c;
  let rating = c && ((difficulty - c.l) * 100) / (c.r - c.l + 1);
  return (
    <div
      ref={ref}
      className={className}
      {...props}
      style={{
        color: `black`,
        background: `linear-gradient(to right, ${color} ${rating}%, rgba(0, 0, 0, 0) ${rating}%) border-box border-box`,
      }}
    ></div>
  );
})

export default RatingText;