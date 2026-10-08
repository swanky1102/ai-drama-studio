export type AuthUser={id:string;email?:string};
export type AuthState={accessToken:string;user:AuthUser};
const KEY="ai-drama-studio-auth-v1";
export function loadAuth():AuthState|null{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):null}catch{return null}}
export function saveAuth(v:AuthState){localStorage.setItem(KEY,JSON.stringify(v))}
export function clearAuth(){localStorage.removeItem(KEY)}
