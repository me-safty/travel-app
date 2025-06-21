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
       w-full flex items-center justify-between mt-[80px] mb-4
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

      {/* الجزء الأيمن: Admin Panel, Avatar, Notifications (بدون عداد) */}
      <div className={`${figtree.className} flex gap-2`}>
        {/* رابط Admin Panel */}
        <span>Terms & Condition</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  )
}
