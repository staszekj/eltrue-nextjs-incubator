import "./globals.css";
import { Roboto } from "next/font/google";
import { JotaiProvider } from "./jotai/jotaiProvider";
import "tw-elements/dist/css/tw-elements.min.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: roboto.style.fontFamily }}>
      <body>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
}
