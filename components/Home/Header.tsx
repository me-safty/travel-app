import Image from "next/image"
import User from "@/components/auth/User"
import LogoutButton from "@/components/auth/LogoutButton"

export default function Header() {
  return (
    <header
      className="
       pt-[30px] z-50 w-full flex items-center justify-between
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
          font-bold
          text-2xl
          leading-6
          tracking-normal
          text-[#1F1F36]
        `}
        >
          Tourvisto
        </span>
      </div>

      <div className="flex items-center justify-between gap-[24px]">
        <User userNameClassName="text-white" />
        <LogoutButton
          url="/login"
          className="bg-white/30 p-2 rounded-full shadow"
        />
      </div>
    </header>
  )
}
