import { SignOut } from "../../components/signout-button";
import { auth } from "../../../auth";
import type { Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserPage() {
 
  const session: Session | null = await auth();
 
  if (!session) {
    redirect("/"); // redireciona se não estiver logado
  }

  return (
    <>
      <h1>Página Private</h1>
      {session.user?.name && <h2>{session.user.name}</h2>}
      <SignOut />
    </>
  );
}