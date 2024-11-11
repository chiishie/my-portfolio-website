import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Dev portfolio",
  description: "Dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} antialiased relative`}>
        <Navbar />
        <div className="relative min-h-dvh bg-[#0C0B14]">
          <div className="fixed inset-0 bg-[url(/img/noise-&-texture.png)] bg-center bg-cover bg-no-repeat opacity-10 z-0"></div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
