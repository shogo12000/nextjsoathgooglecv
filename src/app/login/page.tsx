 
import SignInUser from "../components/sign-in";
import FormLogin from "../components/formLogin";

export default function Login() {
  
  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="flex flex-col gap-5"> 
        <FormLogin/>
        <SignInUser />
      </div>
    </div>
  );
}
