import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import StoreProvider from "./providers/store-provider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
  description: "Teste Front React WeFit",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <html lang="pt-BR">
        <head>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </head>
        <body className={openSans.className}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
