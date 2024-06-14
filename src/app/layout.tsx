import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/section/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ivandjoh.com",
    description: "My Next App",
};

export function LayoutContent({
                                  children,
                              }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
        </body>
        </html>
    );
}
