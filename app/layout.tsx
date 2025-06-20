import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroller from "@/libs/LenisScoller";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taranpreet Singh",
  description: "Taranpreet Portfolio | Full Stack Developer | Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  transition-all duration-1000 ease-in-out dark:bg-["#171717"] bg-["#ffffff"]   antialiased `}
      > 
      <LenisScroller>
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            
          >
            {children}
          </ThemeProvider>
      </LenisScroller>
      </body>
    </html>
  );
}
