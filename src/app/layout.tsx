import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header/Header";
import style from "./layout.module.scss";
import Navigate from "./components/layout/Navigate/Navigate";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Training nextJS",
  description: "This app just for training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className}`}>
        <Header />
        <div className={style.divider}></div>
        <Navigate />
        {children}
      </body>
    </html>
  );
}
