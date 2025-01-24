import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ weight: ['400', '500', '700'],subsets: ['latin'], })


export const metadata = {
  title: "WeCodeThat",
  description: "WeCodeThat specializes in delivering custom software solutions tailored to your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} antialiased`}
      >
        {children}

        <PrelineScript />
      </body>
    </html>
  );
}
