import Image from "next/image"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Figtree } from "next/font/google"
import User from "@/components/auth/User"
import LogoutButton from "@/components/auth/LogoutButton"

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

interface HeaderProps {
  userName?: string
  userAvatarSrc?: string
}

export default function Header(
  {
    // userName = "Admin Panel",
    // userAvatarSrc = "/images/default-avatar.png",
  }: HeaderProps
) {
  return (
    <header
      className="
       pt-3 z-50 w-full flex items-center justify-between
      "
    >
      {/* خلفية متدرجة مع تأثيرات خفيفة */}

      {/* المحتوى الرئيسي للهيدر */}
      {/* الشعار */}
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

      <div className="flex items-center justify-between gap-1">
        <User userNameClassName="text-white" />
        <LogoutButton url="/login" />
      </div>
    </header>
  )
}
