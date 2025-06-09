import { ReactNode } from "react";

export default function RootLayout({ children }: {children:ReactNode}) {
  return (
    <html>
      <body>
        <h1>Header</h1>
        <h1>Sidbar</h1>
        {children}
      </body>
    </html>
  );
}