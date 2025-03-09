import { Provider } from "@/components/common/Provider";
import type { Metadata } from "next";
import "./globals.css";
import { Navigator } from "@/components/layouts/Navigator";

export const metadata: Metadata = {
  title: "LC-Rating & Training",
  icons: "/lc-rating/favico.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <Navigator />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
