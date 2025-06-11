"use client"
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { signIn } from "next-auth/react";
import { useState } from "react";
export function LoginAdminForm() {
    const [isLoading, setIsLoading] = useState(false)
  
    const handleLogin = async () => {
      setIsLoading(true)
      await signIn("google", { callbackUrl: "/dashboard" })
    }

  
  return (
    <Card className="w-100">
      <CardHeader className=" w-full flex justify-center items-center flex-col gap-3.5">

        <CardTitle className="flex justify-center items-center gap-1.5 mb-3 text-2xl">
          <img src="/assets/icons/logo.svg" />
          Tourvisto
        </CardTitle>
        <CardTitle className="text-[25px]">Admin Dashboard Login</CardTitle>
        <CardDescription className="text-center">
            Sign in with Google to manage destinations, itineraries, and user activity with ease.
        </CardDescription>

      </CardHeader>


      <CardContent>
        <Button
          onClick={handleLogin}
          variant="outline"
          className="w-full bg-blue-600 text-white flex justify-center items-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <FaGoogle />
              Sign in with Google
            </>
          )}
        </Button>
      </CardContent>

    </Card>
  )
}