"use client";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@components/layouts/Navbar";
import { ThemeProvider } from "@hooks/useTheme";
import Loading from "@components/Loading";

import "../../../scss/styles.scss";

const client = new QueryClient();

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <div className="app bg-body">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
