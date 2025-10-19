import { NextResponse } from "next/server";
import pool from "../lib/db";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

export async function POST(req){
    const body = await req.json();
    const {email,password}= body;
    console.log(email,password)
    const res = await pool.query('SELECT * FROM korisnici where email =$1 and user_password=$2 ',[email,password])
    if(res.rows.length>0){
        return NextResponse.json({success:"true",redirect:'/welcome'})
    }
    else{
        return NextResponse.json({message:"Something went wrong"})
    }
    

}