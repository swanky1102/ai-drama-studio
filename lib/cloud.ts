import type {Project} from "./types";
import {loadAuth} from "./auth";
export async function cloudProject(action:"load"|"save",project?:Project,projectKey="default",token?:string){
 const auth=token||loadAuth()?.accessToken;
 const url="/api/projects?key="+encodeURIComponent(projectKey);
 const headers=auth?{Authorization:"Bearer "+auth,"Content-Type":"application/json"}:{"Content-Type":"application/json"};
 const r=await fetch(url,{method:action==="save"?"POST":"GET",headers,body:action==="save"?JSON.stringify({project,projectKey}):undefined});
 if(!r.ok)throw new Error(await r.text());
 return await r.json() as {project?:Project;cloud:boolean;authenticated?:boolean};
}