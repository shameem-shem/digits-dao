import "./globals.css";
import { Montserrat } from "next/font/google";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const font = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal"],
    display: "swap",
});

export const metadata = {
    title: "Digits DAO",
    description: "Digits DAO",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`bg-dark-blue text-white text-13 ${font.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
