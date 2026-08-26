import type { Metadata } from "next";
import { Montserrat_Alternates, Geist } from "next/font/google";
import "./styles/normalize.css";
import "./styles/global.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { parseColors } from "@/shared/utils/parseColorsToCssVars";

const monserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "600", "700", "800"],
});
const geist = Geist({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "AniFirst",
  description:
    "Смотрите Аниме без рекламы в высоком качестве. Watch Anime without ads in high quality",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const cssVars = parseColors();
  return (
    <html
      lang="ru"
      className={`${geist.className} ${monserratAlternates.variable}`}
    >
      <head>
        <style>{`:root {\n${cssVars}\n}`}</style>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
