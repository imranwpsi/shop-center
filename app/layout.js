import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
    title: "Shop Center",
    description: "Shop center is online e-commerce website in Bangladesh",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
