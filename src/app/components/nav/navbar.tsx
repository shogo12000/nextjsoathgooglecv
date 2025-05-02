 
import Link from "next/link";
import { auth } from "../../../auth";
import { SignOut } from "../../components/signout-button";
import { Session } from "next-auth";
import { MobileMenu } from "./MobileMenu";

export default async function NavBar() {
  const session: Session | null = await auth();
  
  console.log(session, "xxxxxxxxxxx");
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm h-[50px]">
      <div className="hidden sm:flex gap-4 justify-between w-full">
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {!session && (
            <>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
          {session?.user?.email && (
            <>
              <Link href="/movies" className="hover:underline">
                Movies
              </Link>
              <Link href="/user" className="hover:underline">
                User
              </Link>
            </>
          )}
        </div>
        {session?.user?.email && <SignOut />}
      </div>

      <MobileMenu />
    </nav>
  );
}
