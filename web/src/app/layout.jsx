import Navbar from "@/components/ui/NavbarComponent";
import "./globals.css";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Padikkal Travels - School Transportation",
  description: "Learn more about Padikkal Travels Private Limited and our commitment to safe school transportation in Bangalore.",
  openGraph: {
    title: "Padikkal Travels - School Transportation",
    description: "Learn more about Padikkal Travels Private Limited and our commitment to safe school transportation in Bangalore.",
    url: "https://www.padikkaltravels.com",
    images: [
      {
        url: "https://www.padikkaltravels.com/aboutimg.png",
        width: 800,
        height: 600,
        alt: "Padikkal Travels",
      },
    ],
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
