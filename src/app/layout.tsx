import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/scss/globals.scss";
import AOSProvider from "./AOSProvider";
import "aos/dist/aos.css";
import Script from "next/script";
import ThemeProvider from "./ThemeProvider";

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    { path: "../assets/fonts/Montserrat/Montserrat-Thin.ttf", weight: "100", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../assets/fonts/Montserrat/Montserrat-Black.ttf", weight: "900", style: "normal" },

    { path: "../assets/fonts/Montserrat/Montserrat-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-Italic.ttf", weight: "400", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../assets/fonts/Montserrat/Montserrat-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Indoor Smart Gardening System – Grow Healthy Plants Smartly",
  description:
    "A smart indoor gardening system designed to help plants grow healthier through controlled care, automation, and consistent early-stage support.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme'); // 'light' | 'dark' | null
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>

      <body className={montserrat.className}>
        <ThemeProvider>
          <AOSProvider>{children}</AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
