import { ReactNode } from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";

  

export default async function RootLayout({ children }: {children:ReactNode}) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/loginadmin");
  }
  return (
    <html>
      <body>
        <h1>Header</h1>
              <LogoutButton url="/loginadmin"/>
        <h1>Sidbar</h1>
        {children}
      </body>
    </html>
  );
}