import { LoginAdminForm } from "@/components/auth/login-Admin-form";

export default async function LoginAdmin() {
    
    return (
        <>
            <img src="/assets/images/auth-img.webp"
                 alt="Authentication Cover Image" 
                 className=" object-cover  w-[100%] h-[100vh] absolute"
            />
            <div className="relative flex items-center justify-center h-screen z-10">
                <LoginAdminForm/>
            </div>
        </>
    )
}