"use client";
import {useState} from "react";
import {saveAuth} from "../../lib/auth";
export default function Login(){
 const [email,setEmail]=useState(""),[password,setPassword]=useState(""),[mode,setMode]=useState<"login"|"signup">("login"),[busy,setBusy]=useState(false),[error,setError]=useState("");
 async function submit(){
  setBusy(true);setError("");
  try{
   const r=await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:mode==="signup"?"signup":"login",email,password})});
   const d=await r.json();if(!r.ok)throw Error(d.error||"Authentication failed.");
   if(!d.access_token){setError("Account created. Check your email to confirm your account, then sign in.");setMode("login");return}
   saveAuth({accessToken:d.access_token,user:{id:d.user?.id,email:d.user?.email}});window.location.href="/";
  }catch(e){setError(e instanceof Error?e.message:"Authentication failed.")}finally{setBusy(false)}
 }
 return <main className="authPage"><section className="authCard"><div className="brand"><span className="mark">✦</span><div><b>DRAMA</b><small>STUDIO</small></div></div><p className="eyebrow">AI PRODUCTION WORKSPACE</p><h1>{mode==="login"?"Welcome back.":"Create your studio."}</h1><p className="authCopy">Your projects are private to your account and can sync to the cloud.</p><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></label>{error&&<div className="authError">{error}</div>}<button className="primary authButton" onClick={submit} disabled={busy}>{busy?"Working…":mode==="login"?"Sign in":"Create account"}</button><button className="ghost authSwitch" onClick={()=>{setMode(mode==="login"?"signup":"login");setError("")}}>{mode==="login"?"Need an account? Create one":"Already have an account? Sign in"}</button></section></main>
}