import { Provider } from "@/components/common/Provider";
import type { Metadata } from "next";
import "./globals.css";

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
