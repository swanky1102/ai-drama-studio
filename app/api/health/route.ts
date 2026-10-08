import {NextResponse} from "next/server";
export async function GET(){return NextResponse.json({ok:true,service:"ai-drama-studio",version:"0.6.0",timestamp:new Date().toISOString(),integrations:{anthropic:Boolean(process.env.ANTHROPIC_API_KEY),supabase:Boolean(process.env.SUPABASE_URL&&process.env.SUPABASE_ANON_KEY)}})}
