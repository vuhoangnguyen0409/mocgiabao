import Script from "next/script";
import RevealHandler from "@/components/RevealHandler";
import "./globals.css";

export const metadata = {
  title: "Mộc Bảo Gia — Luxury Wood & Interior Design",
  description: "Luxury interior design and wood products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Manrope:wght@200;300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/tooplate-ivory-style.css" />
      </head>
      <body>
        {children}
        <Script
          src="/tooplate-ivory-script.js"
          strategy="afterInteractive"
        />
        <RevealHandler />
      </body>
    </html>
  );
}
