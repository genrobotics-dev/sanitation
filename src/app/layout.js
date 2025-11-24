import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import GlobalLoader from "@/components/GlobalLoader";
import { NavigationProvider } from "@/components/NavigationEvents";
//import SplashScreen from "@/components/Splashscreen";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metaData = {
  title: "Sanitation Robot for Urban Cleaning | Genrobotics",
  description:
    "Genrobotics’ sanitation robot automates sewer and drain cleaning, ensuring safer, smarter, and more efficient sanitation solutions. Book your demo today.",
  keywords:
    "Genrobotics, Bandicoot, Robotics, Sanitation, Innovation, manhole cleaning robot, sewer cleaning robot, sewer jetting machine",
  url: "https://sanitation.genrobotics.com/"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
       <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E5S92WX53T"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-E5S92WX53T');`}
        </Script>
      </head>
      <body className={`antialiased`}>
       {/* <SplashScreen />*/}
        <NavigationProvider>
          <GlobalLoader />
          <Header />
          {children}
          <Toaster />
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
