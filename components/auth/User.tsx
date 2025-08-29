import React from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-options"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserProps {
  userNameClassName?: string
}

const User: React.FC<UserProps> = async ({ userNameClassName }) => {
  const session = await getServerSession(authOptions)

  const userName = session?.user?.name || "مستخدم"
  const userImage = session?.user?.image || ""

  return (
    <div className="flex items-center gap-[24px] space-x-2">
      <span className={`hidden md:block m-0 ${userNameClassName || ""}`}>
        {userName}
      </span>
      <Avatar className="w-8 h-8">
        <AvatarImage
          src={userImage}
          alt={`صورة ${userName}`}
        />
        <AvatarFallback className="select-none focus:outline-none">{userName.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default User
