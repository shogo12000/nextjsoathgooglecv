import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData    
) {
    const email = formData.get("email") 
    
    return "Invalid Credentials";
    try {
  
        // await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Invalid credentials.';
        }
        throw error;
    }
}