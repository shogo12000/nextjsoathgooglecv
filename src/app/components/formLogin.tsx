"use client";
import Form from "next/form";
import { useActionState, useState } from "react";
import { authenticate } from "../lib/actions";

export default function FormLogin() {
  const [status, formAction] = useActionState(authenticate, undefined);
  const [email, setEmail] = useState("");

  return (
    <div>
      <Form action={formAction} className="flex flex-col gap-3">
        <h1>USER LOGIN</h1>
        <label>
          Email
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </label>
        <label>
          Password
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6}
          />
        </label>
        <input type="hidden" name="redirectTo" value={"/user"} />
        <button   className="bg-gray-300 px-2 py-1 rounded ">
          Login
        </button>

        <h2>{status}</h2>
      </Form>
    </div>
  );
}
