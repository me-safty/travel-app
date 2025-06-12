import { ReactNode } from "react"
import "./globals.css"
import Providers from "@/app/providers"
// شلت البروفايدر اصلا  مبدئيا حتى تلاقي حل للموضوع

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
