"use client";
import Form from "next/form";
import { useActionState, useState } from "react";
import { registerUserForm } from "../lib/actions";
 

export default function FormRegister() {
  const [status, formAction] = useActionState(registerUserForm, undefined);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  if(status === "saved"){
    return (
      <h1>USER SAVED SUCESSFULLY</h1>
    )
  }
  return (
    <div>
      <Form action={formAction} className="flex flex-col gap-3">
        <h1>REGISTER USER</h1>
        <label>
          UserName
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="userName"
            type="text"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
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
        <button type="submit" className="bg-gray-300 px-2 py-1 rounded ">Register</button>

        <h2>{status}</h2>
      </Form>
    </div>
  );
}
