import dynamic from "next/dynamic";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "LC-Rating & Training",
  icons: "/lc-rating/favico.svg",
}

const MainLayout = dynamic(() => import("@components/layouts/MainLayout"), {
  ssr: false,
});

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
