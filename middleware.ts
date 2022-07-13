import { NextRequest, NextResponse } from "next/server";

function rewriteMembers(req: NextRequest): NextResponse | null {
    // Rewrite the request to /members if member cookie is given
    console.log("rewriteMembers",req.cookies.get("member"));
    if (req.cookies.has("member")) {
        const resUrl = req.nextUrl.clone()
        resUrl.pathname = "/members"
        return NextResponse.rewrite(resUrl)
    }
    return null
}

export default async function middleware(req: NextRequest) {
    const resUrl = req.nextUrl.clone()

    // We don't want members to be able to access the member over the /member url 
    if (req.nextUrl.pathname === "/member") {
        resUrl.pathname = '/404'
        return NextResponse.rewrite(resUrl)
    }

    if (req.nextUrl.pathname === "/") {
        const response = await rewriteMembers(req)
        if (response) {
            return response
        }
    }

    // If we don't have a response, we'll just pass it through
    return NextResponse.next()
}