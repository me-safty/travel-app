import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";

export default  async function HomePage() {
  
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  
  return (
    <>
      <h1 className="text-4xl">HomePage</h1>
    </>
  );
}
