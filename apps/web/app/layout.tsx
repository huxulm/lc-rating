import { Navigator } from "@/components/common/Navigator";
import { Provider } from "@/components/common/Provider";
import { BASE_PATH } from "@/config/constants";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LC-Rating & Training",
  icons: `${BASE_PATH}/favico.svg`,
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
