import { NextResponse } from "next/server";
import db from "@/app/lib/db";
export async function POST(req) {
    const body = await req.json();
    const {email,password}= body;
    const res = await db.query('INSERT INTO korisnici (email,user_password) VALUES ($1,$2)',[email,password])
    console.log("Podaci:",email,password)
    return NextResponse.json({ success: true });
   
}