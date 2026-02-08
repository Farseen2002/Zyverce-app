import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ZYVERCE - Digital Solutions & Education",
    description: "Modern digital platforms, intelligent management systems, and future-ready skill programs.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
                <div className="relative flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer brandIcon={
                        <img
                            src="/z-logo.png"
                            alt="ZYVERCE Logo"
                            className="w-full h-full object-contain"
                        />
                    } />
                </div>
            </body>
        </html>
    );
}
