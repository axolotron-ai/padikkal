import Navbar from "@/components/ui/NavbarComponent";
import "./globals.css";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Padikkal travels - School Transportation Service",
  description: "Safe, reliable, and comfortable transportation for school trips",
  openGraph: {
    title: "Padikkal - School Transportation Service",
    description: "Safe, reliable, and comfortable transportation for school trips",
    url: "https://padikkal.com",
    siteName: "Padikkal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
    </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
