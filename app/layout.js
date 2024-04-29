import { Inter } from "next/font/google";
import "./globals.css";
import MenuPrincipal from "./MenuPrincipal";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markiki",
  description:
    "Markiki: Construcción, entretenimiento y tecnología. Soluciones innovadoras para tus necesidades en cada área.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-PE">
      <body className={inter.className}>
        <div className="bg-black">
          <div className="2xl:container mx-auto  ">
            <MenuPrincipal />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
