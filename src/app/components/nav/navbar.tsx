import Link from "next/link";


export default function NavBar(){
    return (
        <nav className="bg-gray-100 border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
 
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/register" className="hover:underline">Register</Link>
        </div>
      </nav>
    )
}