import { Geist, Geist_Mono, Kanit, Days_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const daysOne = Days_One({
  variable: "--font-days-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Monstercat - copy",
  description: "Frontend Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${daysOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
