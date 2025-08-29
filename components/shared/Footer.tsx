import Image from "next/image"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Figtree } from "next/font/google"

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"], // الوزن 400 (Regular) هو المطلوب
})

export default function Footer() {
  return (
    <footer
      className="
       w-full flex items-center justify-between mt-30 mb-4
      "
    >
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/icons/logo.svg"
          alt="Tourvisto Logo"
          width={30}
          height={30}
        />
        <span
          className={`
          ${plusJakartaSans.className} // <--- استخدام الخط هنا مباشرة
          font-bold
          text-2xl
          leading-6
          tracking-normal
          text-[#1F1F36] // اللون المحدد
        `}
        >
          Tourvisto
        </span>
      </div>

      <div className="flex space-x-4 text-gray-600 text-sm">
        <a
          href="/terms"
          className="hover:text-gray-900 transition-colors"
        >
          Terms & Condition
        </a>
        <a
          href="/privacy"
          className="hover:text-gray-900 transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
