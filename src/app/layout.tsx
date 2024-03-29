import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TesTheater",
  description: "Personal TesTheater",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: "grey"}}>{children}</body>
    </html>
  );
}
