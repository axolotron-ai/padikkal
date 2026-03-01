import Navbar from "@/components/ui/NavbarComponent";
import Footer from "@/components/ui/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Padikkal Travels - School Transportation",
  description:
    "Learn more about Padikkal Travels Private Limited and our commitment to safe school transportation in Bangalore.",
  openGraph: {
    title: "Padikkal Travels - School Transportation",
    description:
      "Learn more about Padikkal Travels Private Limited and our commitment to safe school transportation in Bangalore.",
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KGJGLB8D');
    `,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGJGLB8D"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
