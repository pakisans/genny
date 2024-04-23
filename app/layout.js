import { Merriweather, Italiana } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShopCartWrapper } from "@/components/context/ShopCartContext";
import { Toaster } from "react-hot-toast";

const inter = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "GENNY - Kompletno rešenje za vaš prostor",
  description:
    "Genny - vaš izbor za za sve vrste podnih materijala i enterijerskih rešenja. Naš asortiman obuhvata visokokvalitetni mermer, granit, keramičke pločice, laminat, kao i sofisticiran izbor sanitarija, vrata, rasvete, tuš kabina, i đakuzija. Sve što je potrebno da vaš dom ili poslovni prostor zasija novim sjajem, naći ćete kod nas. Posetite GENNY i pronađite idealno rešenje koje spaja funkcionalnost, estetiku i trajnost.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body
        className={`${inter.className} ${roboto.variable} min-h-screen bg-gradient-to-t from-black to-darkgrey bg-no-repeat bg-auto overflow-hidden mx-5 lg:mx-10 pt-10`}
      >
        <div className="-ml-20">
          <Toaster
            containerStyle={{
              position: "relative",
            }}
            position="top-center"
          />
        </div>

        <ShopCartWrapper>
          <div className="relative pt-10 md:p-10 gaper pb-[3rem]">
            <Header />
            <div className="w-full h-full z-10 overflow-hidden">
              <div className="overflow-y-scroll h-full">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </ShopCartWrapper>
      </body>
    </html>
  );
}
