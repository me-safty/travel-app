import { ReactNode } from "react"
import "./globals.css"
import Providers from "@/app/providers"
import { Plus_Jakarta_Sans, Figtree } from "next/font/google"

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${plusJakartaSans.className} ${figtree.className}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
