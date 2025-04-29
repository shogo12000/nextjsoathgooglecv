//export { auth as middleware } from "@/auth"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'

export async function middleware(request: NextRequest) {
    const session = await auth();
    const isLoggedIn = !!session?.user;

    console.log("MIDDLEWARE...................")
    console.log(isLoggedIn);
    if (!isLoggedIn) { 
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}
 
 
export const config = {
    matcher: '/user/:path*',
}