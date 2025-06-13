"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Figtree } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"], // الوزن 400 (Regular) هو المطلوب
});

interface HeaderProps {
  userName?: string;
  userAvatarSrc?: string;
}

export default function Header({
  userName = "Admin Panel",
  userAvatarSrc = "/images/default-avatar.png",
}: HeaderProps) {
  return (
    <header
      className="
      fixed top-0 left-0 z-50 container w-full m-auto px-4 py-2 flex items-center justify-between
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
      <div className="flex items-center space-x-4">
        {/* رابط Admin Panel */}
        <span
          className={`
          ${figtree.className} // <--- تطبيق خط Figtree هنا
          text-white // اللون الأبيض #FFFFFF
          text-base // الحجم 16px (text-base)
          leading-6 // ارتفاع السطر 24px (leading-6)
          font-normal // الوزن 400 (Regular)
          tracking-normal // تباعد الحروف 0px
          // w-[89px] h-[24px] // يمكن إضافة هذه الأبعاد إذا كانت ضرورية جداً، ولكن النص سيتكيف غالباً
        `}
        >
          {userName}
        </span>

        {/* فاصل بصري (محاكاة للحد الأيمن المذكور في Figma) */}
        <div className="h-8 w-px bg-white/30 rounded-full" />

        {/* صورة المستخدم (Avatar) */}
        <Avatar className="w-10 h-10 border-2 border-white">
          <AvatarImage src={userAvatarSrc} alt={userName || "User Avatar"} />{" "}
          {/* استخدم userName كـ alt إذا كان موجودًا */}
          <AvatarFallback className="bg-blue-600 text-white font-bold">
            AB
          </AvatarFallback>
        </Avatar>
        <Button className="flex flex-row w-10 h-10 rounded-[26px] p-2 gap-[10px] bg-white/30">
          <Image
            src="/assets/icons/logout.svg" // <--- هذا هو المسار الصحيح
            alt="Sign Out"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </header>
  );
}
