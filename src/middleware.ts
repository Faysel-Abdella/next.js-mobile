import { type NextRequest, NextResponse } from 'next/server';


export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (pathname === "/") {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|static|_next|favicon.ico|robots.txt).*)'],
};
