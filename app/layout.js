import "./globals.css";

import { Poppins } from "next/font/google"

const poppins = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  fallback: ["Helvetica Neue", "sans-serif"],
  subsets: ["latin-ext", "latin"],
});


export const metadata = {
  title: "CafeA",
  description: "Tugas Sistem Informasi Kelompok 4 Kelas A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
