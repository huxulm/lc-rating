import type { Metadata } from "next";
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("@components/layouts/MainLayout"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "LC-Rating & Training",
  icons: "/lc-rating/v0/favico.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
