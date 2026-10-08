import {NextResponse} from "next/server";
const url=process.env.SUPABASE_URL;const key=process.env.SUPABASE_ANON_KEY;
export async function POST(req:Request){
 try{
  if(!url||!key)return NextResponse.json({error:"Supabase authentication is not configured."},{status:503});
  const {action,email,password}=await req.json();
  if(!email||!password)return NextResponse.json({error:"Email and password are required."},{status:400});
  const endpoint=action==="signup"?"/auth/v1/signup":"/auth/v1/token?grant_type=password";
  const r=await fetch(url+endpoint,{method:"POST",headers:{apikey:key,"Content-Type":"application/json"},body:JSON.stringify({email,password})});
  const data=await r.json();
  if(!r.ok)return NextResponse.json({error:data.msg||data.error_description||data.message||"Authentication failed."},{status:r.status});
  return NextResponse.json({access_token:data.access_token||null,user:data.user||null});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Authentication failed."},{status:500})}
}