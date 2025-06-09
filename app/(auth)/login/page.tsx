import { LoginForm } from "@/components/auth/login-form"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/auth-options";


export default async function Login() {
    
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }

    return (
        <>
            <img src="/assets/images/auth-img.webp"
                 alt="Authentication Cover Image" 
                 className=" object-cover  w-[100%] h-[100vh] absolute"
            />
            <div className="relative flex items-center justify-center h-screen z-10">
                <LoginForm />
            </div>
        </>
    )
}