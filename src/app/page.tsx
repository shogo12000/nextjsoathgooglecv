import SignIn from "./components/sign-in";
import FormLogin from "./components/formLogin";
export default function Home() {
  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="flex flex-col gap-5">
        <h1>pagina principal</h1>
        <SignIn />
        <FormLogin />
      </div>
    </div>
  );
}
