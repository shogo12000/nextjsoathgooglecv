 
import { AuthError } from 'next-auth';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData    
) {
    const email = formData.get("email") 
    
    return "Invalid Credentials";

}