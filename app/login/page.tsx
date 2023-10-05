import LoginForm from "../components/form/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  if (cookies().get("auth-token")) redirect("/");
  return (
    <main className="h-screen grid place-items-center">
      <div className="p-6 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.3)] w-[36rem]">
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
