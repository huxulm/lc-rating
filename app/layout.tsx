import { Provider } from "@/components/common/Provider";
import type { Metadata } from "next";
import "./globals.css";
import { Navigator } from "@/components/common/Navigator";

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
    <html lang="zh" className="scroll-smooth" suppressHydrationWarning>
      <body className="mt-[var(--navbar-height)]">
        <Provider>
          <Navigator />
          {children}
        </Provider>
      </body>
    </html>
  );
}
