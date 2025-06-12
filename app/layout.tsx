import { ReactNode } from "react";
import "./globals.css";
// شلت البروفايدر اصلا  مبدئيا حتى تلاقي حل للموضوع

export default function RootLayout({ children }: {children:ReactNode}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}