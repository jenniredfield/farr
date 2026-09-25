import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farrsited | Energy Consultancy & Compliance Services",
  description:
    "Farrsited provides energy consultancy and compliance — SAP calculations, EPCs and on-construction assessments — for residential and commercial property.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-secondary-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
