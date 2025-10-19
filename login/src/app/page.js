'use client'
import Image from "next/image";
import styles from "./page.module.css";
import './main.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const router = useRouter();
  const getEmail = (e) =>{
    const em = e.target.value
    setEmail(em)
  }  
  const Pass = (e) =>{
    const pass = e.target.value
    setPass(pass)
  }
  const sendData = async (e) =>{
        e.preventDefault();
        const res = await fetch('/api',{
          method:'POST',
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({email:email,password:pass})
        })
        const data = await res.json()
        console.log(data)
        if(data.success){
          router.push(`/welcome?email=${email}`)
        }
        else{
          alert("Failed")
        }
      
  }
  return (
       <div className="container">
        <form className="forma" onSubmit={sendData}>
          <h1>LOGIN</h1>
          <label>Unesite email:</label>
          <input onChange={getEmail}></input>
          <label>Unesite lozinku:</label>
          <input type="password" onChange={Pass}></input>
          <button>POTVRDI</button>
        </form>
    </div>
  );
}
