import type { Metadata } from "next";
import MdxLayout from "@components/layouts/MdxLayout";
import MonotoneStack from "@components/sections/mono.mdx";
import Dijkstra from "@components/sections/dijkstra.mdx";
import SparseTable from "@components/sections/sparestable.mdx";
import SegmentTree from "@components/sections/segment_tree.mdx";
import String from "@components/sections/string.mdx";
import "../../../scss/algorithm/styles.scss";

const routes = [
  {
    path: "/algorithm-templates#String",
    display: "字符串 (String)",
    mdx: <String />,
  },  
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
  {
    path: "/algorithm-templates#SparseTable",
    display: "SparseTable",
    mdx: <SparseTable />,
  },
  {
    path: "/algorithm-templates#SegmentTree",
    display: "SegmentTree",
    mdx: <SegmentTree />,
  },
];

export const metadata: Metadata = {
  title: "My Code Templates",
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
