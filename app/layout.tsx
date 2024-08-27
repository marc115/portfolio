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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange>
            <div className="flex flex-col h-screen">
              <Header />
              {children}
            </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
