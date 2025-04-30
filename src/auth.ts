import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { getUser } from "./app/lib/data"
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,
    Credentials({ 
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try{
        const { email, password } = credentials ?? {};
        let user = null
        
        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }
 
        //const pwHash = saltAndHashPassword(credentials.password)
 
        //user = await getUserFromDb(credentials.email, pwHash)

        user = await getUser(email);
        const passwordsMatch = await bcrypt.compare(password, user.password);
        
        console.log(passwordsMatch);
        console.log(user);

        if (!passwordsMatch) {
          throw new Error("Invalid credentialsx.")
        }
        

        return {name: user.name, email: user.email};

      }catch(error){
        return null;
      }
 
      },
    }),
  ],
})