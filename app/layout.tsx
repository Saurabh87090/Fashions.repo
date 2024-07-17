import "./globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Mohid Watches",
  description: "Mohid Watches UI/UX design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
