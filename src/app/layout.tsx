import "./globals.css";

import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 flex-col justify-between items-center">{children}</main>
        <footer className="flex justify-center">Footer</footer>
      </body>
    </html>
  );
}
