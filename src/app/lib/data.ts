import postgres from 'postgres';
import bcrypt from 'bcryptjs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function registerUser(name: string, email: string, password: string) {
    try { 
        const existingUser = await sql`
          SELECT * FROM ausers WHERE email = ${email}
        `;

        if (existingUser.length > 0) {
            return "Email Already Registered"
        }
 
        const hashedPassword = await bcrypt.hash(password, 10);
 
        const result = await sql`
          INSERT INTO ausers (name, email, password)
          VALUES (${name}, ${email}, ${hashedPassword})
          RETURNING id, name, email
        `;

        console.log(result);

        return "saved";  
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        throw error;
    }
}


export async function getUser(email: string) {
  try {
    const user = await   sql`SELECT * FROM users WHERE email=${email}`; 
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 