import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import SmoothScrolling from "./_components/SmoothScrolling";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PRABHJOT PORTFOLIO",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <SmoothScrolling>
          <Navigation />
          <div className="sm:p-10 p-3">
            {children}
          </div>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
