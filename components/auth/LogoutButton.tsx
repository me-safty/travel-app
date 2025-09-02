"use client"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { signOut } from "next-auth/react"
import { TbLogout2 } from "react-icons/tb"

type LogoutButtonProps = {
  url?: string
  className?: string
}

export default function LogoutButton({ url, className }: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await signOut({ callbackUrl: url })
  }

  return (
    <button
      onClick={handleLogout}
      className={`bg-none border-none text-red-500 ${className || ""}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" />
        </>
      ) : (
        <>
          <TbLogout2 />
        </>
      )}
    </button>
  )
}
