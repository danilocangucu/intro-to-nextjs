import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/todos", label: "Todos" },
  { href: "/blog", label: "Blog" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav>
            <ul className="flex items-center">
              {links.map(({ href, label }) => (
                <li key={href} className="mr-4">
                  <Link href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <h1>Root Layout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
