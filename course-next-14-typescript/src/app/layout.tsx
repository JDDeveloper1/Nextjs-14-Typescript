import Link from "next/link";
import "./global.css";

import { Metadata } from "next";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export const metadata: Metadata = {
  title: { 
    default: "Aprendiendo Next.js", // el Metadato valor por defecto
    absolute: "", // es un valor absoluto, si se define este valor, el valor por defecto no se tomara en cuenta
    template:"%s - Aprendiendo Next.js", // cuando  tengamos otro metadata definido lo que hara es combinar ambas "%s" seria el valor del primer metadata, y despues seguiria el default 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Cabezera de la app</h1>
          <nav>
            <Link href="/">Home</Link>
            -
            <Link href="/contact">Contact</Link>
            -
            <Link href="/about">About</Link>
            -
            <Link href="/products">Products</Link>
            -
            <Link href="/login">Login</Link>
            -
            <Link href="/signUp">Sign up</Link>
            -
            <Link href="/password">Password</Link>
            -
            <Link href="/dashboard">Dasboard</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <h3>Pié de la app</h3>
        </footer>
      </body>
    </html>
  );
}
