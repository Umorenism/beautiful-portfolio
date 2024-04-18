import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./component/nav/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Next App",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow ">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}