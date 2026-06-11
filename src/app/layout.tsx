import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/assets/scss/globals.scss";
import AOSProvider from "./AOSProvider";
import "aos/dist/aos.css";
import Script from "next/script";
import ThemeProvider from "./ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indoor Smart Gardening System – Grow Healthy Plants Smartly",
  description:
    "A smart indoor gardening system designed to help plants grow healthier through controlled care, automation, and consistent early-stage support.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>

      <body className={manrope.className}>
        <ThemeProvider>
          <AOSProvider>{children}</AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
