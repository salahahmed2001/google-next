
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/Footer";




export const metadata = {
  title: "Google clone ",
  description: "An open source google clone built with next.js and tailwind css .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='relative min-h-screen '
      >

       {/* useSearchParams() has to be wrapped inside `<Suspense />` */}
       <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
