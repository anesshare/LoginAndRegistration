'use client'
import { useSearchParams } from "next/navigation"

export default function Welcome(){
    const params = useSearchParams();
    const email = params.get("email")
    return(
        <p>DOBRODOSAO {email}</p>
    )
}