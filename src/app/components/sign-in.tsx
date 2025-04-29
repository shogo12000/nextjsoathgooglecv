import { signIn } from "@/auth"

 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", {redirectTo: "/user"})
      }}
    >
      <button type="submit" className="bg-gray-300 px-2 py-1 rounded ">Signin with Google</button>
    </form>
  )
} 