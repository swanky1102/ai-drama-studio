import {NextResponse} from "next/server";
import type {Project} from "../../../lib/types";
const url=process.env.SUPABASE_URL;const key=process.env.SUPABASE_ANON_KEY;
async function auth(req:Request){
 if(!url||!key)return null;
 const token=req.headers.get("authorization")?.replace(/^Bearer\s+/i,"");
 if(!token)return null;
 const r=await fetch(url+"/auth/v1/user",{headers:{apikey:key,Authorization:"Bearer "+token},cache:"no-store"});
 if(!r.ok)return null;
 return {token,user:await r.json()};
}
async function sb(path:string,token:string,init:RequestInit={}){
 const r=await fetch(url+"/rest/v1/"+path,{...init,headers:{apikey:key!,Authorization:"Bearer "+token,"Content-Type":"application/json","Prefer":"return=representation",...(init.headers||{})},cache:"no-store"});
 if(!r.ok)throw new Error(await r.text());
 return r.json();
}
export async function GET(req:Request){
 try{
  if(!url||!key)return NextResponse.json({project:null,cloud:false,authenticated:false});
  const a=await auth(req);if(!a)return NextResponse.json({error:"Sign in required."},{status:401});
  const k=new URL(req.url).searchParams.get("key")||"default";
  const rows=await sb("drama_projects?select=project&project_key=eq."+encodeURIComponent(k)+"&limit=1",a.token);
  return NextResponse.json({project:rows?.[0]?.project||null,cloud:true,authenticated:true});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Cloud read failed"},{status:500})}
}
export async function POST(req:Request){
 try{
  if(!url||!key)return NextResponse.json({project:null,cloud:false,authenticated:false});
  const a=await auth(req);if(!a)return NextResponse.json({error:"Sign in required."},{status:401});
  const b=await req.json() as {project:Project;projectKey?:string};if(!b.project)return NextResponse.json({error:"project required"},{status:400});
  const k=b.projectKey||"default";
  const rows=await sb("drama_projects?on_conflict=owner_id,project_key",{method:"POST",body:JSON.stringify({owner_id:a.user.id,project_key:k,project:b.project,updated_at:new Date().toISOString()})},a.token);
  return NextResponse.json({project:rows?.[0]?.project||b.project,cloud:true,authenticated:true});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Cloud save failed"},{status:500})}
}