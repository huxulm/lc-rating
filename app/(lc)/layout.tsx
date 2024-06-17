import MainLayout from "@components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LC-Rating & Training",
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
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
