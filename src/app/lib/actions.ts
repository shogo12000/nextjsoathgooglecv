 
 

export async function authenticate(
    prevState: string | undefined,
    formData: FormData    
) {
    const email = formData.get("email") 
    console.log(email);
    return "Invalid Credentials";

}