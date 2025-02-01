import type { Metadata } from "next";
import { Courgette } from "next/font/google";
import "./styles/globals.scss";

const font = Courgette({
  variable: "--font-courgette",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dear Julianne,",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Julianne",
    "Juul",
    "Jules",
    "Valentine",
    "Proposal",
    "Deyby",
    "Love",
  ],
  authors: [{ name: "Deyby Rodriguez", url: "https://deybyrodriguez.com" }],
  creator: "Deyby Rodriguez",
  publisher: "Deyby Rodriguez",
  openGraph: {
    title: "Juul's V-Day Proposal",
    url: "https://juul-vday.deybyr647.com",
    siteName: "Juul V-Day",
    images: [
      {
        url: "https://juul-vday.deybyr647.com/images/juul_pirate.png",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${font.className} container`}>{children}</body>
    </html>
  );
};

export default RootLayout;
