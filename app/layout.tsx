import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ContextWrapper from "./_contexts/Wrapper";
import NavBar from "./_components/NavBar";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Changify",
    description: "The best way to exchange your currency",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={poppins.className}
                style={{
                    maxWidth: "1366px",
                    minWidth: "350px",
                    margin: "0 auto",
                    height: "100%",
                    overflowX: "hidden",
                }}
            >
                <ContextWrapper>
                    <header>
                        <NavBar />
                    </header>
                    <main className="">{children}</main>
                    <footer></footer>
                </ContextWrapper>
            </body>
        </html>
    );
}
