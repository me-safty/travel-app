"use client";
import { useState } from "react";
import { FaSignOutAlt, FaSpinner } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
  url?: string;
};

export default function LogoutButton({ url}: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await signOut({ callbackUrl: url });
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className=" w-24 bg-red-600 text-white flex justify-center items-center gap-2"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" />
          Logging out...
        </>
      ) : (
        <>
          <FaSignOutAlt />
          Sign out
        </>
      )}
    </Button>
  );
}
