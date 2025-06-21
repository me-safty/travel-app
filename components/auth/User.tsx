import React from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-options"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserProps {
  userNameClassName?: string
}

// جعل المكون دالة غير متزامنة
const User: React.FC<UserProps> = async ({ userNameClassName }) => {
  // استخدام await لجلب الجلسة
  const session = await getServerSession(authOptions)

  // تحقق مما إذا كانت الجلسة موجودة قبل الوصول إلى خصائصها
  const userName = session?.user?.name || "مستخدم"
  const userImage = session?.user?.image || ""

  return (
    <div className="flex gap-1 space-x-2">
      <span className={`hidden md:block ${userNameClassName || ""}`}>
        {userName}
      </span>
      <Avatar className="w-8 h-8">
        <AvatarImage
          src={userImage}
          alt={`صورة ${userName}`}
        />
        <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default User
