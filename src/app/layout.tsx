import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Favicon from "../../public/favicon.ico";
import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer";

interface Props {
  readonly children: ReactNode;
}
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Shop",
  description: "You can buy cars or sale your car",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <section className="w-full h-full flex flex-col items-center">
            <Header />
            <section className=" w-4/5 h-full flex justify-center mt-20 mb-16">
              {children}
            </section>
            <Footer />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
