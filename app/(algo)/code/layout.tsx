import type { Metadata } from "next";
import MdxLayout from "@components/layouts/MdxLayout";
import MonotoneStack from "@components/sections/mono.mdx";
import Dijkstra from "@components/sections/dijkstra.mdx";
import "../../../scss/algorithm/styles.scss";

const routes = [
  {
    path: "/algorithm-templates#Monotone-Stack",
    display: "单调栈 (Monotone Stack)",
    mdx: <MonotoneStack />,
  },
  {
    path: "/algorithm-templates#Dijkstra",
    display: "Dijkstra",
    mdx: <Dijkstra />,
  },
];

export const metadata: Metadata = {
  title: "算法模板",
  icons: "/lc-rating/favico.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <MdxLayout routes={routes}>{children}</MdxLayout>
      </body>
    </html>
  );
}
