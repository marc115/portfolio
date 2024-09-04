import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/custom/Header";

import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Juan Marcano | Portfolio",
  description: "Juan Marcano's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-900 dark:to-sky-900">
            <Header />
            {/* Background grid */}
            <div className="bg-grid">
            </div>
            {children}
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
