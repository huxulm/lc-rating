"use client";

import { Route } from "@app/(algo)/code/layout";
import Link from "next/link";
import { useMemo, useState } from "react";

interface MaxLayoutProps {
  children: React.ReactNode;
  routes: Route[];
}

export default function MdxLayout({ children, routes = [] }: MaxLayoutProps) {
  const [selected, setSelected] = useState(routes[0].path);
  const code = useMemo(
    () => routes.find((r) => r.path === selected),
    [selected]
  );

  const handleClick = (_: React.MouseEvent<HTMLElement>, r: Route) => {
    setSelected(r.path);
  };

  return (
    <div className="debug mdx-layout">
      <nav className="top-nav">
        <Link href="/code">My Code Templates</Link>
      </nav>
      <aside className="side-nav">
        <ul>
          {routes.map((r, idx) => {
            return (
              <li
                key={`menu-item-${idx}`}
                className={
                  r.path === selected ? "menu-item active" : "menu-item"
                }
                onClick={(_) => handleClick(_, r)}
              >
                {r["display"]}
              </li>
            );
          })}
        </ul>
      </aside>
      <div className="content">{code?.mdx ?? ""}</div>
    </div>
  );
}
