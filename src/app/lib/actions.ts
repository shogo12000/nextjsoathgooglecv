'use server'
import { signIn } from "@/auth"
import { AuthError } from 'next-auth';
import { registerUser } from "./data";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);



    } catch (error) {
        if (error instanceof AuthError) {
            return 'Invalid credentials.';
        }
        throw error;
    }
}

export async function registerUserForm(
    prevState: string | undefined,
    formData: FormData,
) {
    const userName = formData.get("userName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!userName || !email || !password) {
        return "Please fill in all fields.";
    }

    try {
        const msg = await registerUser(userName, email, password);

        return msg;
    } catch (error) {
        if (error instanceof Error && error.message.includes("Email already registered")) {
            return "Email is already registered.";
        }
    }
}

