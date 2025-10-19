'use client'
import './main.css'
import { useState } from "react";
export default function Home() {
  const [change,setChange]= useState("");
  const [second,setSecond]=useState("");
  function getFirst(e){
    const val = e.target.value;
    setChange(val)
  }
  function getSecond(e){
    const val = e.target.value
    setSecond(val)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res =await fetch('/api',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email: change, password: second})
    })
    const data = await res.json();
    console.log(data)
    if(data){
      alert("Success")
    }
    else{
      alert("Fail")
    }
  }

  return (
    <div className="container">
        <form className="forma" onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          <label>Unesite email:</label>
          <input onChange={getFirst}></input>
          <label>Unesite lozinku:</label>
          <input type="password" onChange={getSecond}></input>
          <button>POTVRDI</button>
        </form>
    </div>
  );
}
