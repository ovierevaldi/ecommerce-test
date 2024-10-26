import { deleteSession } from "@/lib/session-provider";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    await deleteSession();

    return NextResponse.redirect(new URL('/auth/', req.nextUrl))
}