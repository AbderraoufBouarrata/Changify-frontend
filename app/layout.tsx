import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ContextWrapper from "./_contexts/Wrapper";
import NavBar from "./_components/NavBar";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";

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
    const styles = {
        body: {
            maxWidth: "1366px",
            minWidth: "350px",
            margin: "0 auto",
            height: "100%",
        },
        main: {
            minHeight: "100dvh",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gridTemplateColumns: "100%",
        },
    };
    return (
        <html lang="en">
            <body
                className={poppins.className + " px-4 xl:px-0"}
                style={styles.body}
            >
                <ContextWrapper>
                    <header>
                        <NavBar />
                    </header>
                    <main style={styles.main}>{children}</main>
                    <footer>
                        <ContactUs />
                        <Footer />
                    </footer>
                </ContextWrapper>
            </body>
        </html>
    );
}
